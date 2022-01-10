import { Component, Input, OnInit } from '@angular/core';
// import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss'],
})
export class MovesListComponent implements OnInit {
  @Input() moves: Move[];
  @Input() contactId: string;

  constructor() {}

  ngOnInit(): void {}
}
