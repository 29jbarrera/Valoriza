import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  UnidadesDeMedidaTiposDeCombustibleService,
  UnidadMedidaTiposCombustibleDto,
  UnidadesDeMedidaService
} from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class UnidadesService {
  constructor(
    private _unidadMedidaTiposCombustibleService: UnidadesDeMedidaTiposDeCombustibleService,
    private _unidadesDeMedidaService: UnidadesDeMedidaService
  ) {}
  async getGastosTaller(): Promise<UnidadMedidaTiposCombustibleDto[]> {
    const response = await lastValueFrom(
      this._unidadMedidaTiposCombustibleService.apiV2UnidadesMedidaTipoCombustibleGet()
    );

    const responses2 = await lastValueFrom(
      this._unidadesDeMedidaService.apiV2UnidadesMedidaGet()
    );
    console.log(responses2);
    return response.results || [];
  }
  async deleteGastosTaller(gastosTallerId: number) {
    await lastValueFrom(
      this._unidadMedidaTiposCombustibleService.apiV2UnidadesMedidaTipoCombustibleIdDelete(
        gastosTallerId
      )
    );
  }
}
