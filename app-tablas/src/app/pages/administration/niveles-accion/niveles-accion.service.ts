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
    return response.results;

    // const nivelesAccion: NivelesAccion[] = [];
    // for (let i = 0; i < 100; i++) {
    //   nivelesAccion.push({
    //     action: randCurrencyName(),
    //     group: randVehicleModel(),
    //   });
    // }
    // return nivelesAccion;
  }
}
