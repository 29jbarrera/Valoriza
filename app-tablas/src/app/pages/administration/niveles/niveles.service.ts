import { Injectable } from '@angular/core';

import {
  NivelMantenimientoDto,
  NivelMantenimientoService,
} from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NivelesService {
  constructor(
    private _nivelesMantenimientoService: NivelMantenimientoService
  ) {}
  async getNiveles(): Promise<NivelMantenimientoDto[]> {
    const response = await lastValueFrom(
      this._nivelesMantenimientoService.apiV2NivelMantenimientoGet()
    );
    return response.results || [];
  }
  async deleteNiveles(nivelesId: number) {
    await lastValueFrom(
      this._nivelesMantenimientoService.apiV2NivelMantenimientoIdDelete(
        nivelesId
      )
    );
  }
}
