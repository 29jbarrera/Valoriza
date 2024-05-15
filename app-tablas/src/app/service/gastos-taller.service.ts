import { Injectable } from '@angular/core';
import { rand, randAmount, randArn, randCurrencyName } from '@ngneat/falso';

import { GastosTaller } from '../Interfaces/gastos-taller.interface';

@Injectable({
  providedIn: 'root',
})
export class GastosTallerService {
  constructor() {}

  async getGastosTaller(): Promise<GastosTaller[]> {
    const gastosTaller: GastosTaller[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      gastosTaller.push({
        centerProvider: randCurrencyName(),
        delegation: randArn(),
        date: randomDate,
        provider: randCurrencyName(),
        amount: randAmount({ min: 10, max: 100 }),
        currency: 'EUR',
        materialReference: randCurrencyName(),
        descriptionRefMaterial: randCurrencyName(),
        quantity: randAmount({ min: 10, max: 100 }),
        switchableCost: true,
        description: randCurrencyName(),
        deliveryNote: randCurrencyName(),
        file: randCurrencyName(),
      });
    }
    return gastosTaller;
  }
}
