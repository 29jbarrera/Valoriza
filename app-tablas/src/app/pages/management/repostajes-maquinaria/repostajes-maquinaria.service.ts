import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  MantenimientoRepostajeService,
  MantenimientoRepostajeDto,
} from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class RepostajesService {
  constructor(
    private _mantenimientoRepostajeService: MantenimientoRepostajeService
  ) {}
  async getRepostajes(): Promise<MantenimientoRepostajeDto[]> {
    const response = await lastValueFrom(
      this._mantenimientoRepostajeService.apiV2MantenimientoRepostajeGet()
    );
    return response.results;
    // const repostajeMaquinaria: RepostajeMaquinaria[] = [];
    // const randomDate = new Date(
    //   rand([new Date(2020, 0, 1).getTime()]) as number
    // );
    // for (let i = 0; i < 100; i++) {
    //   repostajeMaquinaria.push({
    //     center: randCurrencyName(),
    //     tuition: randArn(),
    //     date: randomDate,
    //     amount: randAmount(),
    //     fuelType: 'Diesel',
    //     units: randAmount(),
    //   });
    // }
    // return repostajeMaquinaria;
  }
}
