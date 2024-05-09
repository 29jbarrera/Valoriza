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

import { GastosTaller } from '../Interfaces/gastos-taller.interface';

@Injectable({
  providedIn: 'root',
})
export class GastosTallerService {
  constructor() {}

  async getGastosTaller(): Promise<GastosTaller[]> {
    const gastosTaller: GastosTaller[] = [];
    const randomDate = new Date(rand([new Date(2020, 0, 1).getTime(), new Date().getTime()]) as number);
    for (let i = 0; i < 100; i++) {
      gastosTaller.push({
        centroProveedor: randCurrencyName(),
        delegacion: randArn(),
        fecha: randomDate,
        proveedor: randCurrencyName(),
        importe: randAmount({ min: 10, max: 100 }),
        divisa: 'EUR',
        referenciaMaterial: randCurrencyName(),
        descripcionRefMaterial: randCurrencyName(),
        cantidad: randAmount({ min: 10, max: 100 }),
        gastoConmutable: true,
        descripcion: randCurrencyName(),
        albaran: randCurrencyName(),
        archivo: randCurrencyName(),
      });
    }
    return gastosTaller;
  }
}
