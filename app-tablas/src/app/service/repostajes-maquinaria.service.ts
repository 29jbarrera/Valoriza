import { Injectable } from '@angular/core';
import { rand, randAmount, randArn, randCurrencyName } from '@ngneat/falso';

import { RepostajeMaquinaria } from '../Interfaces/repostajes-maquinaria.interface';

@Injectable({
  providedIn: 'root',
})
export class RepostajesService {
  constructor() {}
  async getRepostajes(): Promise<RepostajeMaquinaria[]> {
    const repostajeMaquinaria: RepostajeMaquinaria[] = [];
    const randomDate = new Date(
      rand([new Date(2020, 0, 1).getTime()]) as number
    );
    for (let i = 0; i < 100; i++) {
      repostajeMaquinaria.push({
        center: randCurrencyName(),
        matricula: randArn(),
        date: randomDate,
        amount: randAmount(),
        fuelType: 'Diesel',
        units: randAmount(),
      });
    }
    return repostajeMaquinaria;
  }
}
