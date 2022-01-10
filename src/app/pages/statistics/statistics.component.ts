import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BitcoinService } from 'src/app/services/bitcoinService/bitcoin.service';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  data: any = null;
  rates = [];
  dates = [];
  subscription: Subscription;

  constructor(private bitcoinService: BitcoinService) {}

  ngOnInit(): void {
    this.subscription = this.bitcoinService
      .getMarketPrice()
      .subscribe((res) => {
        res.forEach((item) => {
          this.rates.push(item.rate);
          this.dates.push(item.date);
        });
      });
  }
}
