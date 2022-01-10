import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact-filter.model';
import { ContactService } from 'src/app/services/contactService/contact.service';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss'],
})
export class ContactFilterComponent implements OnInit {
  @Input() filterBy: ContactFilter;
  @Output() onSetFilter = new EventEmitter<ContactFilter>();
  constructor() {}

  _filterBy: ContactFilter;

  ngOnInit(): void {
    this._filterBy = { ...this.filterBy };
  }

  // filterBy: ContactFilter;
  // subscription: Subscription
  // constructor(private contactService: ContactService) { }

  // ngOnInit(): void {
  // this.subscription = this.contactService.filterBy$.subscribe(filterBy=>{
  //   this.filterBy = filterBy
  // })
  // }

  // onSetFilter() {
  //   this.petService.setFilter({...this.filterBy})

  // }
}
