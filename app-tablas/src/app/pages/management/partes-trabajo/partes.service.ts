import { Injectable } from '@angular/core';
import {
  rand,
  randCompanyName,
  randCurrencyName,
  randProductDescription,
} from '@ngneat/falso';

import { Partes } from './type';

@Injectable({
  providedIn: 'root',
})
export class PartesService {
  constructor() {}

  async getPartes(): Promise<Partes[]> {
    const partes: Partes[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      partes.push({
        centerName: randCompanyName(),
        delegation: randCurrencyName(),
        tuition: randProductDescription(),
        name: randCurrencyName(),
        date: randomDate,
        state: randCurrencyName(),
        maintenanceType: randCurrencyName(),
      });
    }
    return partes;
  }
}
