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

import { ReparacionesCentro } from '../Interfaces/reparaciones-centro.interface';
@Injectable({
  providedIn: 'root'
})
export class ReparacionesCentroService {
  constructor() {}

  async getReparacionesCentro(): Promise<ReparacionesCentro[]> {
    const reparacionesCentro: ReparacionesCentro[] = [];
    for (let i = 0; i < 100; i++) {
      reparacionesCentro.push({
        code: randAmount({ min: 10, max: 100 }),
        name: randCompanyName(),
        delegation: randProductDescription(),
        cost: randAmount({ min: 10, max: 100 }),
      });
    }

    return reparacionesCentro;
  }
}
