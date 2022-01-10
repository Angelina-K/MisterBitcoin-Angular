import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../userService/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(public userService: UserService, private router: Router) {}
  canActivate(): boolean {
    if (!this.userService.isAuthenticated()) {
      this.router.navigate(['signup']);
      return false;
    } else {
      return true;
    }
  }
}
