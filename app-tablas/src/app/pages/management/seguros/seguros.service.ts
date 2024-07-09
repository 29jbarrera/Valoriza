import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { SeguroService, SeguroDto } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class SegurosService {
  constructor(private _seguroService: SeguroService) {}

  async getSeguros(): Promise<SeguroDto[]> {
    const response = await lastValueFrom(this._seguroService.apiV2SeguroGet());
    return response.results || [];

    // const seguros: Seguros[] = [];
    // const randomDate = new Date(
    //   rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    // );
    // for (let i = 0; i < 100; i++) {
    //   seguros.push({
    //     center: randCurrencyName(),
    //     machines: randArn(),
    //     insuranceCompany: randCurrencyName(),
    //     state: randCurrencyName(),
    //     type: randVehicleModel(),
    //     numberPoliza: randAmount(),
    //     startDate: randomDate,
    //     endDate: randomDate,
    //     amount: randAmount({ min: 10, max: 100 }),
    //     currency: 'EUR',
    //     comment: randProductDescription(),
    //   });
    // }
    // return seguros;
  }
}
