import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contactService/contact.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private userService: UserService
  ) {}
  // @Output() onRemove = new EventEmitter<string>();

  subscription: Subscription;
  contact: Contact;

  // user: User;
  user$: Observable<User>;

  moves: Move[];
  moves$: Observable<Move[]>;

  // relevantMoves=[]
  // subscription = Subscription;

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe((data) => {
      this.contact = data['contact'];
      // this.moves = this.userService.loadMoves(this.contact._id);
      this.userService.loadMoves(this.contact._id);
      this.moves$ = this.userService.moves$;
    });
    this.user$ = this.userService.user$;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onCloseSection() {
    this.router.navigateByUrl('contact');
  }
  onEditContact() {
    this.router.navigateByUrl(`contact/edit/${this.contact._id}`);
  }
  async onRemoveContact() {
    await this.contactService.removeContact(this.contact._id);
    this.onCloseSection();
  }
  transferCoins(coins: string) {
    const amount = parseFloat(coins);
    this.userService.addMove(this.contact, amount);
  }
}
