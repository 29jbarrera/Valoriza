import { Injectable } from '@angular/core';
import { randProductDescription, randAmount } from '@ngneat/falso';

import { Categorias } from '../Interfaces/categorias.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor() {}
  async getCategorias(): Promise<Categorias[]> {
    const categorias: Categorias[] = [];
    for (let i = 0; i < 100; i++) {
      categorias.push({
        description: randProductDescription(),
        code: randAmount(),
      });
    }
    return categorias;
  }
}
