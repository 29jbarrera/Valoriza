import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { MarcaService, MarcaDto } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class MarcasService {
  constructor(private _marcaService: MarcaService) {}
  async getMarcas(): Promise<MarcaDto[]> {
    const response = await lastValueFrom(this._marcaService.apiV2MarcaGet());
    return response.results;

    // const marcas: Marcas[] = [];
    // for (let i = 0; i < 50; i++) {
    //   marcas.push({
    //     name: randCompanyName(),
    //   });
    // }
    // return marcas;
  }
}
