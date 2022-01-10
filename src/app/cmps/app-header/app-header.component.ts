import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  user$: Observable<User>;

  showMobileMenu: boolean = false;
  ngOnInit(): void {
    this.user$ = this.userService.user$;
  }
  openMenu() {
    this.showMobileMenu = true;
  }
  closeMenu() {
    this.showMobileMenu = false;
  }
  onLogOut() {
    this.userService.logOut();
    this.router.navigateByUrl('');
    this.closeMenu();
  }
}
