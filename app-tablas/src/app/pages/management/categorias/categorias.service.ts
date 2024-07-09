import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { CategoriaDto, CategoriaService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(private _categoriaService: CategoriaService) {}
  async getCategorias(): Promise<CategoriaDto[]> {
    const response = await lastValueFrom(
      this._categoriaService.apiV2CategoriaGet()
    );
    return response.results;

    //   const categorias: Categorias[] = [];
    //   for (let i = 0; i < 100; i++) {
    //     categorias.push({
    //       description: randProductDescription(),
    //       code: randAmount(),
    //     });
    //   }
    //   return categorias;
  }
}
