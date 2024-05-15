import { Injectable } from '@angular/core';

import { randAmount, randArn, randCompanyName } from '@ngneat/falso';

import { CambioCentro } from '../Interfaces/cambioCentro.interface';

@Injectable({
  providedIn: 'root',
})
export class CambioCentroService {
  constructor() {}
  async getCambioCentro(): Promise<CambioCentro[]> {
    const cambioCentro: CambioCentro[] = [];
    for (let i = 0; i < 100; i++) {
      cambioCentro.push({
        selected: true,
        machineryTuition: randArn(),
        centerCode: randAmount(),
        centerName: randCompanyName(),
        destinationCenterCode: randAmount(),
        destinationCenterName: randCompanyName(),
      });
    }
    return cambioCentro;
  }
}
