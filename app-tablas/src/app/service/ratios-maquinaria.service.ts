import { Injectable } from '@angular/core';
import {
  rand,
  randAmount,
  randArn,
  randCompanyName,
  randCurrencyName,
} from '@ngneat/falso';

import { RatiosMaquinaria } from '../Interfaces/ratiosMaquinaria.interface';

@Injectable({
  providedIn: 'root',
})
export class RatiosMaquinariaService {
  constructor() {}

  async getRatiosMaquinaria(): Promise<RatiosMaquinaria[]> {
    const ratiosMaquinaria: RatiosMaquinaria[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      ratiosMaquinaria.push({
        dateFrom: randomDate,
        dateUntil: randomDate,
        tuition: randArn(),
        centre: randCompanyName(),
        repairs: randAmount({ min: 1, max: 20 }),
        insurance: randAmount({ min: 1, max: 20 }),
        tax: randAmount({ min: 1, max: 20 }),
        amortization: randAmount({ min: 1, max: 20 }),
        financial: randAmount({ min: 1, max: 20 }),
        rate: randAmount({ min: 1, max: 20 }),
        ratio: randAmount({ min: 1, max: 20 }),
        currency: randCurrencyName(),
      });
    }
    return ratiosMaquinaria;
  }
}
