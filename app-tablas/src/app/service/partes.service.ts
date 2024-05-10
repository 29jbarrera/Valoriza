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

import { Partes } from '../Interfaces/parte.interface';

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
        nameCenter: randCompanyName(),
        delegacion: randCurrencyName(),
        matricula: randProductDescription(),
        name: randCurrencyName(),
        date: randomDate,
        state: randCurrencyName(),
        tipeMantenimiento: randCurrencyName(),
      });
    }
    return partes;
  }
}
