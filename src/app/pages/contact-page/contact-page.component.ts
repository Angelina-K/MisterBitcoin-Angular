import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, Observable, Subscription } from 'rxjs';
import { ContactFilter } from 'src/app/models/contact-filter.model';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contactService/contact.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  constructor(private contactService: ContactService, private router: Router) {}

  contact: Contact[];
  filterBy: ContactFilter;

  contacts$: Observable<Contact[]>;
  subscription: Subscription;

  async ngOnInit(): Promise<void> {
    await this.contactService.loadContacts(this.filterBy);
    this.contacts$ = this.contactService.contacts$;
    this.filterBy = { term: '' };

    // this.loadContacts;
  }

  onRemoveContact(contactId: string) {
    this.contactService.removeContact(contactId);
    this.router.navigateByUrl('contact');
  }
  async onSetFilter(filterBy) {
    this.filterBy = filterBy;
    await this.contactService.loadContacts(this.filterBy);
  }
}
