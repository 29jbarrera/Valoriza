import { Injectable } from '@angular/core';
import { randAmount, randBrand, randCurrencyName } from '@ngneat/falso';

import { Globales } from '../Interfaces/globales.interface';

@Injectable({
  providedIn: 'root',
})
export class TablaGlobalesService {
  constructor() {}
  async getGlobales(): Promise<Globales[]> {
    const globales: Globales[] = [];
    for (let i = 0; i < 100; i++) {
      globales.push({
        name: randCurrencyName(),
        codeLength: randAmount(),
        accessType: 'Limitado',
        session: true,
        task: randBrand(),
      });
    }
    return globales;
  }
}
