import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/services/bitcoinService/bitcoin.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService
  ) {}

  user: User;
  bitcoin: any;
  user$: Observable<User>;
  moves$: Observable<Move[]>;
  subscription = Subscription;

  async ngOnInit() {
    this.user$ = this.userService.user$;
    this.userService.loadMoves();
    this.moves$ = this.userService.moves$;

    const bitcoin = await this.bitcoinService.getRate().toPromise();
    this.bitcoin = bitcoin;
  }
}
