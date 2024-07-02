import { Injectable } from '@angular/core';

import {
  rand,
  randCompanyName,
  randCurrencyName,
  randVehicleManufacturer,
} from '@ngneat/falso';

import { TasasCentro } from './type';

@Injectable({
  providedIn: 'root',
})
export class TasasCentroService {
  constructor() {}

  async getTasasCentro(): Promise<TasasCentro[]> {
    const tasasCentro: TasasCentro[] = [];
    const randomDate = new Date(rand([new Date().getTime()]) as number);
    for (let i = 0; i < 100; i++) {
      tasasCentro.push({
        dateForm: randomDate,
        dateUntil: randomDate,
        delegation: randCurrencyName(),
        code: randCompanyName(),
        name: randCurrencyName(),
        cost: randCompanyName(),
        currency: randVehicleManufacturer(),
      });
    }
    return tasasCentro;
  }
}
