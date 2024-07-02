import { Injectable } from '@angular/core';
import {
  randAmount,
  randArn,
  randCurrencyName,
  randVehicleManufacturer,
  randVehicleModel,
} from '@ngneat/falso';

import { Stock } from './type';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor() {}

  async getStock(): Promise<Stock[]> {
    const stock: Stock[] = [];

    for (let i = 0; i < 100; i++) {
      stock.push({
        centerName: randVehicleManufacturer(),
        nameMaterialReference: randArn(),
        descriptionMaterialReference: randVehicleModel(),
        quantity: randAmount({ min: 1, max: 20 }),
        amount: randAmount({ min: 10, max: 100 }),
        currency: randCurrencyName(),
      });
    }
    return stock;
  }
}
