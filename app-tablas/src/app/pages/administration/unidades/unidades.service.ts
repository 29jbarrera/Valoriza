import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  UnidadMedidaTiposCombustibleService,
  UnidadMedidaTiposCombustibleDto,
} from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class UnidadesService {
  constructor(
    private _unidadMedidaTiposCombustibleService: UnidadMedidaTiposCombustibleService
  ) {}
  async getGastosTaller(): Promise<UnidadMedidaTiposCombustibleDto[]> {
    const response = await lastValueFrom(
      this._unidadMedidaTiposCombustibleService.apiV2UnidadMedidaTiposCombustibleGet()
    );
    return response.results || [];
  }
  async deleteGastosTaller(gastosTallerId: number) {
    await lastValueFrom(
      this._unidadMedidaTiposCombustibleService.apiV2UnidadMedidaTiposCombustibleIdDelete(
        gastosTallerId
      )
    );
  }
}
