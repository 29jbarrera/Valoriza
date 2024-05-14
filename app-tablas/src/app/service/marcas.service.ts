import { Injectable } from '@angular/core';
import { randCompanyName } from '@ngneat/falso';

import { Marcas } from '../Interfaces/marcas.interface';

@Injectable({
  providedIn: 'root',
})
export class MarcasService {
  constructor() {}
  async getMarcas(): Promise<Marcas[]> {
    const marcas: Marcas[] = [];
    for (let i = 0; i < 50; i++) {
      marcas.push({
        name: randCompanyName(),
      });
    }
    return marcas;
  }
}
