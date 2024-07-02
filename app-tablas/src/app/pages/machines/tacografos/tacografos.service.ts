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

import { Tacografo } from './type';

@Injectable({
  providedIn: 'root',
})
export class TacografosService {
  constructor() {}

  async getTacografos(): Promise<Tacografo[]> {
    const tacografos: Tacografo[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      tacografos.push({
        machinery: randVehicleManufacturer(),
        center: randArn(),
        delegation: randCurrencyName(),
        family: randCurrencyName(),
        subFamily: randCurrencyName(),
        nextDate: randomDate,
      });
    }

    return tacografos;
  }
}
