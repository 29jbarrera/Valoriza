import { Injectable } from '@angular/core';
import { randCurrencyName } from '@ngneat/falso';

import { FamiliasSubfamilias } from './type';

@Injectable({
  providedIn: 'root',
})
export class FamiliasSubfamiliasService {
  constructor() {}
  async getFamiliasSubfamilias(): Promise<FamiliasSubfamilias[]> {
    const familiasSubfamilias: FamiliasSubfamilias[] = [];
    for (let i = 0; i < 100; i++) {
      familiasSubfamilias.push({
        description: randCurrencyName(),
      });
    }
    return familiasSubfamilias;
  }
}
