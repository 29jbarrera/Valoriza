import { Injectable } from '@angular/core';

import { NivelesMantenimientoService, CreateNivelesMantenimientoDto } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NivelesService {
  constructor(private _nivelesMantenimientoService: NivelesMantenimientoService) {}
  async getNiveles(): Promise<CreateNivelesMantenimientoDto[]> {
    const response = await lastValueFrom(this._nivelesMantenimientoService.apiV2NivelesMantenimientoGet());
    return response.results;

    // const niveles: Niveles[] = [];
    // const randomDate = new Date(
    //   rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    // );
    // for (let i = 0; i < 100; i++) {
    //   niveles.push({
    //     code: randAmount(),
    //     frequency: randAmount(),
    //     type: randVehicleManufacturer(),
    //     average: randAmount(),
    //     periodic: true,
    //     startDate: randomDate,
    //   });
    // }
    // return niveles;
  }
}
