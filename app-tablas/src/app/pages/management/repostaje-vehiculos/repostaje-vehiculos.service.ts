import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { RepostajeDto, RepostajeService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root'
})
export class RepostajeVehiculosService {

  constructor(private _repostajeService: RepostajeService) { }
  async getRepostajeVehiculos(): Promise<RepostajeDto[]> {
    const response = await lastValueFrom(this._repostajeService.apiV2RepostajeGet());
    return response.results || [];

    // const repostajeVehiculos: RepostajeVehiculos[] = [];
    // const randomDate = new Date(rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number);
    // for (let i = 0; i < 100; i++) {
    //   repostajeVehiculos.push({
    //     centerMachine: randCurrencyName(),
    //     deposit: randCurrencyName(),
    //     machine: randVehicleManufacturer(),
    //     bidon: '',
    //     date: randomDate,
    //     amount: randAmount(),
    //     account: randAmount(),
    //     card: randAmount(),
    //   });
    // }
    // return repostajeVehiculos;
  }
}
