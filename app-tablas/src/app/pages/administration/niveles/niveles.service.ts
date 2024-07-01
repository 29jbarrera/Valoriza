import { Injectable } from '@angular/core';

import { rand, randAmount, randVehicleManufacturer } from '@ngneat/falso';

import { Niveles } from './type';

@Injectable({
  providedIn: 'root',
})
export class NivelesService {
  constructor() {}
  async getNiveles(): Promise<Niveles[]> {
    const niveles: Niveles[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      niveles.push({
        code: randAmount(),
        frequency: randAmount(),
        type: randVehicleManufacturer(),
        average: randAmount(),
        periodic: true,
        startDate: randomDate,
      });
    }
    return niveles;
  }
}
