import { Injectable } from '@angular/core';

import { DepositoService, DepositoDto } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepositosService {
  constructor(private _depositoService: DepositoService) {}
  async getDepositos(): Promise<DepositoDto[]> {
    const response = await lastValueFrom(this._depositoService.apiV2DepositoGet());
    return response.results || [];

    // const depositos: Depositos[] = [];
    // for (let i = 0; i < 100; i++) {
    //   depositos.push({
    //     center: randCurrencyName(),
    //     description: randArn(),
    //     capacity: randAmount(),
    //     common: true,
    //   });
    // }
    // return depositos;
  }
}
