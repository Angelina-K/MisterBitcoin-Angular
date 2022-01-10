import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Contact } from 'src/app/models/contact.model';
import { UtilService } from '../util.service';
import { Move } from 'src/app/models/move.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private utilService: UtilService) {}

  private _user$ = new BehaviorSubject<User>(
    this.utilService.loadFromStorage('user')
  );
  public user$ = this._user$.asObservable();

  private _moves$ = new BehaviorSubject<Move[]>([]);
  public moves$ = this._moves$.asObservable();

  public getLoggedInUser() {
    return this.user$;
  }
  public loadMoves(contactId = null): void {
    if (!this._user$.value) return;
    let moves: Move[] = [...this._user$.value.moves];
    if (contactId) {
      moves = moves.filter((move) => move.toId === contactId);
    }
    this._moves$.next(moves);
  }

  public signUp(name: string) {
    let user = this.utilService.loadFromStorage('user');
    if (!user) {
      const newUser: User = {
        name: name,
        coins: 100,
        moves: [],
      };
      this.utilService.saveToStorage('user', newUser);
      this._user$.next(newUser);
    }
  }

  public logOut() {
    this.utilService.removeFromStorage('user');
    this._user$.next(null);
  }

  public isAuthenticated(): boolean {
    const user = this._user$.getValue();
    return !!user;
  }

  public addMove(contact: Contact, amount: number): void {
    const newMove = new Move(contact._id, contact.name, Date.now(), amount);

    const user = { ...this._user$.value };
    if (user.coins - amount < 0) return;
    user.coins -= amount;
    user.moves.unshift(newMove);
    this.utilService.saveToStorage('user', user);
    this._user$.next(user);
    this.loadMoves(contact._id);
  }
}
