import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  userName = '';
  onSignup() {
    this.userService.signUp(this.userName);
    this.router.navigateByUrl('');
  }
  ngOnInit(): void {}
}
