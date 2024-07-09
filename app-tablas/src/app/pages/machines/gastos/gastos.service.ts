import { Injectable } from '@angular/core';

import { GastosTallerDto, GastosTallerService } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GastosService {
  constructor(private _gastosTallerService: GastosTallerService) {}

  async getGastos(): Promise<GastosTallerDto[]> {
    const response = await lastValueFrom(
      this._gastosTallerService.apiV2GastosTallerGet()
    );
    return response.results || [];
  }
  async deleteGastos(gastosID: number) {
    await lastValueFrom(
      this._gastosTallerService.apiV2GastosTallerIdDelete(gastosID)
    );
  }
}
