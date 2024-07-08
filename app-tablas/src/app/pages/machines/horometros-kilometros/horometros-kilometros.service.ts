import { Injectable } from '@angular/core';

import { HmKmDto, HmKmService } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HorometrosKilometrosService {
  constructor(private _hmkmService: HmKmService) {}

  async getHorometrosKilometros(): Promise<HmKmDto[]> {
    const response = await lastValueFrom(this._hmkmService.apiV2HmKmGet());
    return response.results;   


    // const horometrosKilometros: HorometrosKilometros[] = [];
    // const randomDate = new Date(
    //   rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    // );
    // for (let i = 0; i < 100; i++) {
    //   horometrosKilometros.push({
    //     machineCenter: randCompanyName(),
    //     subFamily: randArn(),
    //     machinery: randCurrencyName(),
    //     brand: randCurrencyName(),
    //     model: randVehicleModel(),
    //     finalHorometer: randAmount(),
    //     finalKM: randAmount(),
    //     date: randomDate,
    //   });
    // }
    // return horometrosKilometros;
  }
}
