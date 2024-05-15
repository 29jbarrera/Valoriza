import { Injectable } from '@angular/core';
import {
  rand,
  randAmount,
  randArn,
  randCurrencyName,
  randVehicleManufacturer,
  randVehicleModel,
} from '@ngneat/falso';

import { Reparaciones } from '../Interfaces/reparaciones.interface';

@Injectable({
  providedIn: 'root',
})
export class ReparacionesService {
  constructor() {}

  async getReparaciones(): Promise<Reparaciones[]> {
    const reparaciones: Reparaciones[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      reparaciones.push({
        repairCentre: randVehicleManufacturer(),
        machinery: randArn(),
        typeAction: randVehicleModel(),
        typeMaintenance: randCurrencyName(),
        date: randomDate,
        supplier: randCurrencyName(),
        deliveryNote: randCurrencyName(),
        cost: randAmount({ min: 10, max: 100 }),
        currency: randCurrencyName(),
        description: randCurrencyName(),
      });
    }

    return reparaciones;
  }
}
