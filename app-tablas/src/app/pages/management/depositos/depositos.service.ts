import { Injectable } from '@angular/core';
import { randAmount, randArn, randCurrencyName } from '@ngneat/falso';

import { Depositos } from './type';

@Injectable({
  providedIn: 'root',
})
export class DepositosService {
  constructor() {}
  async getDepositos(): Promise<Depositos[]> {
    const depositos: Depositos[] = [];
    for (let i = 0; i < 100; i++) {
      depositos.push({
        center: randCurrencyName(),
        description: randArn(),
        capacity: randAmount(),
        common: true,
      });
    }
    return depositos;
  }
}
