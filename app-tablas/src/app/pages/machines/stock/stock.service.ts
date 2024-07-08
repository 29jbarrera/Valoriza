import { Injectable } from '@angular/core';
import {
  randAmount,
  randArn,
  randCurrencyName,
  randVehicleManufacturer,
  randVehicleModel,
} from '@ngneat/falso';

import { Stock } from './type';
import { lastValueFrom } from 'rxjs';
import { StockDto, StockService as StockServiceAG } from '@valoriza/web-commons';
@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private _stockService: StockServiceAG) {}

  async getStock(): Promise<StockDto[]> {
    const response = await lastValueFrom(this._stockService.apiV2StockGet());
    return response.results;

    // Mock data
    // const stock: StockDto[] = [];
    // for (let i = 0; i < 100; i++) {
    //   stock.push({
    //     centerName: randVehicleManufacturer(),
    //     nameMaterialReference: randArn(),
    //     descriptionMaterialReference: randVehicleModel(),
    //     quantity: randAmount({ min: 1, max: 20 }),
    //     amount: randAmount({ min: 10, max: 100 }),
    //     currency: randCurrencyName(),
    //   });
    // }
    // return stock;
  }
}
