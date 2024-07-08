import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { GncDto, GncService as GncServiceAG } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class GncService {
  constructor(private _gncService: GncServiceAG) {}
  async getGnc(): Promise<GncDto[]> {
    const response = await lastValueFrom(this._gncService.apiV2GncGet());
    return response.results;

    //   const gnc: Gnc[] = [];
    //   const randomDate = new Date(
    //     rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    //   );
    //   for (let i = 0; i < 100; i++) {
    //     gnc.push({
    //       machinery: randAmount(),
    //       centerName: randCompanyName(),
    //       delegation: randCurrencyName(),
    //       family: randCurrencyName(),
    //       subFamily: randCurrencyName(),
    //       nextDate: randomDate,
    //     });
    //   }
    //   return gnc;
  }
}
