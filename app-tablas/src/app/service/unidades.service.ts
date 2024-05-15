import { Injectable } from '@angular/core';
import { randCurrencyName, randVehicleModel } from '@ngneat/falso';

import { Unidades } from '../Interfaces/unidades.interface';

@Injectable({
  providedIn: 'root',
})
export class UnidadesService {
  constructor() {}
  async getGastosTaller(): Promise<Unidades[]> {
    const unidades: Unidades[] = [];
    for (let i = 0; i < 100; i++) {
      unidades.push({
        fuelType: randVehicleModel(),
        units: randCurrencyName(),
        symbol: randCurrencyName(),
      });
    }
    return unidades;
  }
}
