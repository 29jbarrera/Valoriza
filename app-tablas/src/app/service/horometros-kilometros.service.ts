import { Injectable } from '@angular/core';
import { HorometrosKilometros } from '../Interfaces/horometros-kilometros.interface';

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

@Injectable({
  providedIn: 'root'
})
export class HorometrosKilometrosService {

  constructor() {}

  async getHorometrosKilometros(): Promise<HorometrosKilometros[]> {
    const horometrosKilometros: HorometrosKilometros[] = [];
      const randomDate = new Date(rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number);
      for (let i = 0; i < 100; i++) {
        horometrosKilometros.push({
          centroMaquina: randCompanyName(),
          subFamilia: randArn(),
          maquinaria: randCurrencyName(),
          marca: randCurrencyName(),
          modelo:randVehicleModel(),
          horometroFinal: randAmount(),
          kilometroFinal: randAmount(),
          fecha:randomDate,
        });
  }
  return horometrosKilometros;
}
}
