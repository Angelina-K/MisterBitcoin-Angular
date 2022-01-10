import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pipe } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(private http: HttpClient) {}

  getRate() {
    return this.http
      .get(`https://blockchain.info/tobtc?currency=USD&value=1`)
      .pipe(map((res) => res));
  }

  getMarketPrice() {
    return this.http
      .get<any>(
        'https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true'
      )
      .pipe(
        map((res) => {
          const marketPrice = this.prepareData(res.values);
          this.saveToStorage('marketPrice', marketPrice);
          return marketPrice;
        })
      );
  }

  prepareData(data) {
    const formattedData = data.map((item) => {
      const date = new Date(item.x * 1000);
      return {
        date: date.toLocaleDateString('en-us', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
        }),
        rate: item.y,
      };
    });
    return formattedData;
  }
  saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
  }

  loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  }
}
