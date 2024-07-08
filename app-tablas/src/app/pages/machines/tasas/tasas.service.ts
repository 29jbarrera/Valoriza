import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { TasasHistoricoDto, TasasHistoricoService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class TasasService {
  constructor(private _tasasHistoricoService: TasasHistoricoService) {}

  async getTasas(): Promise<TasasHistoricoDto[]> {
    const response = await lastValueFrom(this._tasasHistoricoService.apiV2TasasHistoricoGet());
    return response.results;

    // const tasas: Tasas[] = [];
    // const randomDate = new Date(
    //   rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    // );
    // for (let i = 0; i < 100; i++) {
    //   tasas.push({
    //     dateFrom: randomDate,
    //     dateUntil: randomDate,
    //     machineCentre: randCurrencyName(),
    //     subFamily: randCurrencyName(),
    //     tuition: randCurrencyName(),
    //     frame: randCurrencyName(),
    //     totalRate: randAmount({ min: 1, max: 20 }),
    //     chassisRate: randAmount({ min: 1, max: 20 }),
    //     currency: randCurrencyName(),
    //     implement1: randCurrencyName(),
    //     rate1: randAmount({ min: 1, max: 20 }),
    //     currency1: randCurrencyName(),
    //     implement2: randCurrencyName(),
    //     rate2: randAmount({ min: 1, max: 20 }),
    //     currency2: randCurrencyName(),
    //   });
    // }
    // return tasas;
  }
}
