import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'greet-user',
  templateUrl: './greet-user.component.html',
  styleUrls: ['./greet-user.component.scss'],
})
export class GreetUserComponent implements OnInit {
  constructor() {}

  @Input() user: User;
  @Input() bitcoin: number;

  ngOnInit(): void {}
}
