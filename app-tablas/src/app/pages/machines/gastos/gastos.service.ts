import { Injectable } from '@angular/core';

import { GastoTallerDto, GastosTallerService } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GastosService {
  constructor(private _gastosTallerService: GastosTallerService) {}

  async getGastos(): Promise<GastoTallerDto[]> {
    const response = await lastValueFrom(
      this._gastosTallerService.apiV2GastosTallerDocGet()
    );
    return response.results || [];
  }
  async deleteGastos(gastosID: string) {
    await lastValueFrom(
      this._gastosTallerService.apiV2GastosTallerDocClaveGuidDelete(gastosID)
    );
  }
}
