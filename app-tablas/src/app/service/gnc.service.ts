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

import { Gnc } from '../Interfaces/gnc.interface';

@Injectable({
  providedIn: 'root',
})
export class GncService {
  constructor() {}
  async getGnc(): Promise<Gnc[]> {
    const gnc: Gnc[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      gnc.push({
        maquinaria: randAmount(),
        nombrecentro: randCompanyName(),
        delegacion: randCurrencyName(),
        familia: randCurrencyName(),
        subfamilia: randCurrencyName(),
        fechaproxima: randomDate,
      });
    }
    return gnc;
  }
}
