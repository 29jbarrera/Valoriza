import { Injectable } from '@angular/core';

import {
  NivelesMantenimientoAccioneDto,
  NivelesMantenimientoAccioneService,
} from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NivelesAccionService {
  constructor(
    private _nivelesMantenimientoAccionesService: NivelesMantenimientoAccioneService
  ) {}
  async getNivelesAccion(): Promise<NivelesMantenimientoAccioneDto[]> {
    const response = await lastValueFrom(
      this._nivelesMantenimientoAccionesService.apiV2NivelesMantenimientoAccioneGet()
    );
    return response.results || [];
  }
  async deleteNivelesAccion(nivelesAccionId: number) {
    await lastValueFrom(
      this._nivelesMantenimientoAccionesService.apiV2NivelesMantenimientoAccioneIdDelete(
        nivelesAccionId
      )
    );
  }
}
