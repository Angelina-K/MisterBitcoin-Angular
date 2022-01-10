import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact;
  @Output() transferCoins = new EventEmitter<string>();

  constructor() {}

  amount = null;
  errorMsg: string = '';

  onTransferCoins() {
    if (!this.amount || this.amount < 0) {
      this.errorMsg = 'Invalid amount';
      return;
    }
    this.transferCoins.emit(this.amount);
    this.amount = null;
  }

  ngOnInit(): void {}
}
