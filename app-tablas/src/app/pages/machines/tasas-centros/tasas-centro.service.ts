import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { TasasHistoricoDto, TasasHistoricoService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class TasasCentroService {
  constructor(private _tasasHistoricoService: TasasHistoricoService) {}

  async getTasasCentro(): Promise<TasasHistoricoDto[]> {
    const response = await lastValueFrom(this._tasasHistoricoService.apiV2TasasHistoricoGet());
    return response.results || [];

    // const tasasCentro: TasasCentro[] = [];
    // const randomDate = new Date(rand([new Date().getTime()]) as number);
    // for (let i = 0; i < 100; i++) {
    //   tasasCentro.push({
    //     dateForm: randomDate,
    //     dateUntil: randomDate,
    //     delegation: randCurrencyName(),
    //     code: randCompanyName(),
    //     name: randCurrencyName(),
    //     cost: randCompanyName(),
    //     currency: randVehicleManufacturer(),
    //   });
    // }
    // return tasasCentro;
  }
}
