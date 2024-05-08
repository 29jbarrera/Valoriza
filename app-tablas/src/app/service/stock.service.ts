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

import { Stock } from '../Interfaces/stock.interface';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor() {}

  async getStock(): Promise<Stock[]> {
    const stock: Stock[] = [];

    for (let i = 0; i < 100; i++) {
      stock.push({
        nombreCentro: randVehicleManufacturer(),
        nombreReferenciaMaterial: randArn(),
        descripcionRefMaterial: randVehicleModel(),
        cantidad: randAmount({ min: 1, max: 20 }),
        importe: randAmount({ min: 10, max: 100 }),
        divisa: randCurrencyName(),
      });
    }
    return stock;
  }
}
