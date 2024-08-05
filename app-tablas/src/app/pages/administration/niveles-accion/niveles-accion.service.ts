import { Injectable } from '@angular/core';

import {
  NivelMantenimientoTiposAccionDto,
  NivelMantenimientoAccionService,
} from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NivelesAccionService {
  constructor(
    private _nivelesMantenimientoAccionesService: NivelMantenimientoAccionService
  ) {}
  async getNivelesAccion(): Promise<NivelMantenimientoTiposAccionDto[]> {
    const response = await lastValueFrom(
      this._nivelesMantenimientoAccionesService.apiV2NivelMantenimientoAccionGet()
    );
    return response.results || [];
  }
  async deleteNivelesAccion(nivelesAccionId: number) {
    await lastValueFrom(
      this._nivelesMantenimientoAccionesService.apiV2NivelMantenimientoAccionIdDelete(
        nivelesAccionId
      )
    );
  }
}
