import { Injectable } from '@angular/core';
import { randCurrencyName, randVehicleModel } from '@ngneat/falso';

import { NivelesAccion } from './type';

@Injectable({
  providedIn: 'root',
})
export class NivelesAccionService {
  constructor() {}
  async getNivelesAccion(): Promise<NivelesAccion[]> {
    const nivelesAccion: NivelesAccion[] = [];
    for (let i = 0; i < 100; i++) {
      nivelesAccion.push({
        action: randCurrencyName(),
        group: randVehicleModel(),
      });
    }
    return nivelesAccion;
  }
}
