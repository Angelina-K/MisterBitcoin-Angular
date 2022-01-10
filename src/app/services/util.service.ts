// export const utilService = {
//   delay,
//   getRandomInt,
//   makeId,
//   saveToStorage,
//   loadFromStorage,
// };
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UtilService {
  saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
  }

  loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  }
  removeFromStorage(key) {
    localStorage.removeItem(key);
    // return data ? JSON.parse(data) : undefined;
  }

  delay(ms = 1500) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  makeId(length = 5) {
    var txt = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }
}
