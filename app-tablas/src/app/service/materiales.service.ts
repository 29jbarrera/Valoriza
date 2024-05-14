import { Injectable } from '@angular/core';
import { randBrand, randProductDescription } from '@ngneat/falso';

import { Materiales } from '../Interfaces/materiales.interface';

@Injectable({
  providedIn: 'root',
})
export class MaterialesService {
  constructor() {}
  async getMateriales(): Promise<Materiales[]> {
    const materiales: Materiales[] = [];
    for (let i = 0; i < 100; i++) {
      materiales.push({
        reference: randBrand(),
        description: randProductDescription(),
        category: randBrand(),
      });
    }
    return materiales;
  }
}
