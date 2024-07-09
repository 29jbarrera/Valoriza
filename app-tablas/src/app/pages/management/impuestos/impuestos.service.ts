import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { ImpuestoDto, ImpuestoService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ImpuestosService {
  constructor(private _impuestoService: ImpuestoService) {}

  async getImpuestos(): Promise<ImpuestoDto[]> {
    const response = await lastValueFrom(this._impuestoService.apiV2ImpuestoGet());
    return response.results;

    // const impuestos: Impuestos[] = [];
    // const randomDate = new Date(
    //   rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    // );
    // for (let i = 0; i < 100; i++) {
    //   impuestos.push({
    //     center: randCurrencyName(),
    //     address: randProductDescription(),
    //     tuition: randVehicleModel(),
    //     tax: randAmount({ min: 0, max: 1 }),
    //     currency: 'EUR',
    //     date: randomDate,
    //   });
    // }
    // return impuestos;
  }
}
