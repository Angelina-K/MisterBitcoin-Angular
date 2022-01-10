import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contactService/contact.service';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  subscription: Subscription;
  contact: Contact;

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      this.contact = contact._id
        ? contact
        : (this.contactService.getEmptyContact() as Contact);
    });
  }
  onCloseSection() {
    this.router.navigateByUrl('contact');
  }
  async onSaveContact() {
    await this.contactService.saveContact(this.contact);
    this.onCloseSection();
  }
}
