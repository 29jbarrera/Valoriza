import { Injectable } from '@angular/core';
import {
  rand,
  randAmount,
  randCurrencyName,
  randProductDescription,
  randVehicleModel,
} from '@ngneat/falso';

import { Impuestos } from '../Interfaces/impuestos.interface';

@Injectable({
  providedIn: 'root',
})
export class ImpuestosService {
  constructor() {}

  async getImpuestos(): Promise<Impuestos[]> {
    const impuestos: Impuestos[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      impuestos.push({
        center: randCurrencyName(),
        description: randProductDescription(),
        tuition: randVehicleModel(),
        tax: randAmount({ min: 0, max: 1 }),
        currency: 'EUR',
        date: randomDate,
      });
    }
    return impuestos;
  }
}
