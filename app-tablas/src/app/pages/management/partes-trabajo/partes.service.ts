import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { PartesTrabajoDocDto, PartesTrabajoService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class PartesService {
  constructor(private _partesTrabajoDocService: PartesTrabajoService) {}

  async getPartes(): Promise<PartesTrabajoDocDto[]> {
    const response = await lastValueFrom(this._partesTrabajoDocService.apiV2PartesTrabajoGet());
    return response.results;


    // const partes: Partes[] = [];
    // const randomDate = new Date(
    //   rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number
    // );
    // for (let i = 0; i < 100; i++) {
    //   partes.push({
    //     centerName: randCompanyName(),
    //     delegation: randCurrencyName(),
    //     tuition: randProductDescription(),
    //     name: randCurrencyName(),
    //     date: randomDate,
    //     state: randCurrencyName(),
    //     maintenanceType: randCurrencyName(),
    //   });
    // }
    // return partes;
  }
}
