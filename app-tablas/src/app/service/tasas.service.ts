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

import { Tasas } from '../Interfaces/tasas.interface';

@Injectable({
  providedIn: 'root',
})
export class TasasService {
  constructor() {}

  async getTasas(): Promise<Tasas[]> {
    const tasas: Tasas[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      tasas.push({
        dateDesde: randomDate,
        dateHasta: randomDate,
        centroMaquina: randCurrencyName(),
        subFamilia: randCurrencyName(),
        matricula: randCurrencyName(),
        bastidor: randCurrencyName(),
        tasaTotal: randAmount({ min: 1, max: 20 }),
        tasaChasis: randAmount({ min: 1, max: 20 }),
        divisa: randCurrencyName(),
        implemento1: randCurrencyName(),
        tasa1: randAmount({ min: 1, max: 20 }),
        divisa1: randCurrencyName(),
        implemento2: randCurrencyName(),
        tasa2: randAmount({ min: 1, max: 20 }),
        divisa2: randCurrencyName(),
      });
    }
    return tasas;
  }
}
