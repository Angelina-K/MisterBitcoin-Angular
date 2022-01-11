import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onRemove = new EventEmitter<string>();
  constructor(private router: Router) {}

  // showActionBtns: boolean = false;

  onEditContact() {
    this.router.navigateByUrl(`contact/edit/${this.contact._id}`);
    window.scroll(0, 0);
  }
  // toggleActions(ev) {
  //   ev.stopPropagation();
  //   this.showActionBtns = !this.showActionBtns;
  // }

  ngOnInit(): void {}
}
