import { Injectable } from '@angular/core';
import {
  randAmount,
  randCompanyName,
  randProductDescription,
} from '@ngneat/falso';

import { LimiteAvisos } from './type';

@Injectable({
  providedIn: 'root',
})
export class LimiteAvisosService {
  constructor() {}
  async getLimiteAvisos(): Promise<LimiteAvisos[]> {
    const limiteAvisos: LimiteAvisos[] = [];
    for (let i = 0; i < 100; i++) {
      limiteAvisos.push({
        code: randCompanyName(),
        value: randAmount(),
        description: randProductDescription(),
      });
    }
    return limiteAvisos;
  }
}
