import { Injectable } from '@angular/core';

import { XGlobalTableService, XGlobalTableDto } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaGlobalesService {
  constructor(private _xGlobalTableService: XGlobalTableService) {}
  async getGlobales(): Promise<XGlobalTableDto[]> {
    const response = await lastValueFrom(this._xGlobalTableService.apiV2XGlobalTableGet());
    return response.results || [];
    // const globales: Globales[] = [];
    // for (let i = 0; i < 100; i++) {
    //   globales.push({
    //     name: randCurrencyName(),
    //     codeLength: randAmount(),
    //     accessType: 'Limitado',
    //     session: true,
    //     task: randBrand(),
    //   });
    // }
    // return globales;
  }
}
