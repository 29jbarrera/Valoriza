import { Injectable } from '@angular/core';

import {
  NivelMantenimientoTiposAccionDto,
  NivelMantenimientoTiposAccionService,
} from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NivelesAccionService {
  constructor(
    private _nivelesMantenimientoAccionesService: NivelMantenimientoTiposAccionService
  ) {}
  async getNivelesAccion(): Promise<NivelMantenimientoTiposAccionDto[]> {
    const response = await lastValueFrom(
      this._nivelesMantenimientoAccionesService.apiV2NivelMantenimientoTiposAccionGet()
    );
    return response.results || [];
  }
  async deleteNivelesAccion(nivelesAccionId: number) {
    await lastValueFrom(
      this._nivelesMantenimientoAccionesService.apiV2NivelMantenimientoTiposAccionIdDelete(
        nivelesAccionId
      )
    );
  }
}
