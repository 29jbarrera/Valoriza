import { Injectable } from '@angular/core';
import {
  rand,
  randAmount,
  randArn,
  randBrand,
  randCompanyName,
  randCurrencyName,
  randProductDescription,
  randVehicleManufacturer,
  randVehicleModel,
  seed,
} from '@ngneat/falso';

import { RatiosCentro } from '../Interfaces/ratiosCentro.interface';

@Injectable({
  providedIn: 'root',
})
export class RatiosCentroService {
  constructor() {}
  async getRatios(): Promise<RatiosCentro[]> {
    const ratios: RatiosCentro[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      ratios.push({
        dateFrom: randomDate,
        dateUntil: randomDate,
        centre: randCompanyName(),
        repairs: randAmount({ min: 1, max: 20 }),
        insurance: randAmount({ min: 1, max: 20 }),
        tax: randAmount({ min: 1, max: 20 }),
        Amortization: randAmount({ min: 1, max: 20 }),
        financial: randAmount({ min: 1, max: 20 }),
        rate: randAmount({ min: 1, max: 20 }),
        ratio: randAmount({ min: 1, max: 20 }),
        currency: randCurrencyName(),
      });
    }
    return ratios;
  }
}
