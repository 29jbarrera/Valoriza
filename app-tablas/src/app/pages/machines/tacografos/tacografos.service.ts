import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { TacografoDto, TacografoService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class TacografosService {
  constructor(private _tacografoService: TacografoService) {}

  async getTacografos(): Promise<TacografoDto[]> {
    const response = await lastValueFrom(
      this._tacografoService.apiV2TacografoGet()
    );

    return response.results;

    // const tacografos: Tacografo[] = [];
    // const randomDate = new Date(
    //   rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    // );
    // for (let i = 0; i < 100; i++) {
    //   tacografos.push({
    //     machinery: randVehicleManufacturer(),
    //     center: randArn(),
    //     delegation: randCurrencyName(),
    //     family: randCurrencyName(),
    //     subFamily: randCurrencyName(),
    //     nextDate: randomDate,
    //   });
    // }

    // return tacografos;
  }
}
