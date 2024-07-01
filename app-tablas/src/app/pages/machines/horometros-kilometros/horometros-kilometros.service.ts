import { Injectable } from '@angular/core';
import { HorometrosKilometros } from './type';

import {
  rand,
  randAmount,
  randArn,
  randCompanyName,
  randCurrencyName,
  randVehicleModel,
} from '@ngneat/falso';

@Injectable({
  providedIn: 'root',
})
export class HorometrosKilometrosService {
  constructor() {}

  async getHorometrosKilometros(): Promise<HorometrosKilometros[]> {
    const horometrosKilometros: HorometrosKilometros[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      horometrosKilometros.push({
        machineCenter: randCompanyName(),
        subFamily: randArn(),
        machinery: randCurrencyName(),
        brand: randCurrencyName(),
        model: randVehicleModel(),
        finalHorometer: randAmount(),
        finalKM: randAmount(),
        date: randomDate,
      });
    }
    return horometrosKilometros;
  }
}
