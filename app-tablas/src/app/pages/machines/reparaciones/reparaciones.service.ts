import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { ReparacioneDto, ReparacioneService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ReparacionesService {
  constructor(private _reparacioneService: ReparacioneService) {}

  async getReparaciones(): Promise<ReparacioneDto[]> {
    const response = await lastValueFrom(this._reparacioneService.apiV2ReparacioneGet());
    return response.results;


    // const reparaciones: Reparaciones[] = [];
    // const randomDate = new Date(
    //   rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    // );
    // for (let i = 0; i < 100; i++) {
    //   reparaciones.push({
    //     repairCentre: randVehicleManufacturer(),
    //     machinery: randArn(),
    //     typeAction: randVehicleModel(),
    //     typeMaintenance: randCurrencyName(),
    //     date: randomDate,
    //     supplier: randCurrencyName(),
    //     deliveryNote: randCurrencyName(),
    //     cost: randAmount({ min: 10, max: 100 }),
    //     currency: randCurrencyName(),
    //     description: randCurrencyName(),
    //   });
    // }

    // return reparaciones;
  }
}
