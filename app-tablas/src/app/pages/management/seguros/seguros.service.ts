import { Injectable } from '@angular/core';
import {
  rand,
  randAmount,
  randArn,
  randCurrencyName,
  randProductDescription,
  randVehicleModel,
} from '@ngneat/falso';

import { Seguros } from './type';

@Injectable({
  providedIn: 'root',
})
export class SegurosService {
  constructor() {}

  async getSeguros(): Promise<Seguros[]> {
    const seguros: Seguros[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      seguros.push({
        center: randCurrencyName(),
        machines: randArn(),
        insuranceCompany: randCurrencyName(),
        state: randCurrencyName(),
        type: randVehicleModel(),
        numberPoliza: randAmount(),
        startDate: randomDate,
        endDate: randomDate,
        amount: randAmount({ min: 10, max: 100 }),
        currency: 'EUR',
        comment: randProductDescription(),
      });
    }
    return seguros;
  }
}
