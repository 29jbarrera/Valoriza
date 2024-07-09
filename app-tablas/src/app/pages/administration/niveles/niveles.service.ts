import { Injectable } from '@angular/core';

import {
  NivelesMantenimientoService,
  CreateNivelesMantenimientoDto,
} from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NivelesService {
  constructor(
    private _nivelesMantenimientoService: NivelesMantenimientoService
  ) {}
  async getNiveles(): Promise<CreateNivelesMantenimientoDto[]> {
    const response = await lastValueFrom(
      this._nivelesMantenimientoService.apiV2NivelesMantenimientoGet()
    );
    return response.results || [];
  }
  async deleteNiveles(nivelesId: number) {
    await lastValueFrom(
      this._nivelesMantenimientoService.apiV2NivelesMantenimientoIdDelete(
        nivelesId
      )
    );
  }
}
