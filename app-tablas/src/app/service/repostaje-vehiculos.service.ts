import { Injectable } from '@angular/core';

import {
  rand,
  randAmount,
  randArn,
  randBrand,
  randCompanyName,
  randCurrencyName,
  randProductDescription,
  randVehicleManufacturer,
  randVehicleModel,
  seed,
} from '@ngneat/falso';

import { RepostajeVehiculos } from '../Interfaces/repostajes-vehiculos.interface';

@Injectable({
  providedIn: 'root'
})
export class RepostajeVehiculosService {

  constructor() { }
  async getRepostajeVehiculos(): Promise<RepostajeVehiculos[]> {
    const repostajeVehiculos: RepostajeVehiculos[] = [];
    const randomDate = new Date(rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number);
    for (let i = 0; i < 100; i++) {
      repostajeVehiculos.push({
        centerMachine: randCurrencyName(),
        deposit: randCurrencyName(),
        machine: randVehicleManufacturer(),
        bidon: '',
        date: randomDate,
        amount: randAmount(),
        account: randAmount(),
        card: randAmount(),
      });
    }
    return repostajeVehiculos;
  }
}
