import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  @Output() onRemove = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
