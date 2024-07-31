import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
// TODO: Import the necessary modules
// import { CategoriaDto, CategoriaService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  constructor(
    // private _categoriaService: CategoriaService
  ) {}
  // async getCategorias(): Promise<CategoriaDto[]> {
    async getCategorias(): Promise<any[]> {
    // const response = await lastValueFrom(
    //   this._categoriaService.apiV2CategoriaGet()
    // );
    // return response.results || [];
    return [];
  }
  async deleteCategorias(categoriasId: number) {
    // await lastValueFrom(
    //   this._categoriaService.apiV2CategoriaIdDelete(categoriasId)
    // );
  }
}
