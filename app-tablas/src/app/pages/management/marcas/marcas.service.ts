import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { MarcasService as MarcaService, MarcaDto } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class MarcasService {
  constructor(private _marcaService: MarcaService) {}
  async getMarcas(): Promise<MarcaDto[]> {
    const response = await lastValueFrom(this._marcaService.apiV2MarcasGet());
    return response.results || [];
  }
  async deleteMarcas(marcasId: number) {
    await lastValueFrom(this._marcaService.apiV2MarcasIdDelete(marcasId));
  }
}
