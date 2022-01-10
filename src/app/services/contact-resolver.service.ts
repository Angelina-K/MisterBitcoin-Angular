import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactService } from './contactService/contact.service';

@Injectable({
  providedIn: 'root',
})
export class ContactResolverService implements Resolve<Promise<Contact>> {
  constructor(private contactService: ContactService) {}

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id'];
    const contact = await this.contactService.getContactById(id).toPromise();
    return contact;
  }
}
