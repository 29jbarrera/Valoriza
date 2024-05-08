import { Injectable } from '@angular/core';

import { Stock } from '../Interfaces/stock.interface';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor() {}

  async getStock(): Promise<Stock[]> {
    const stock: Stock[] = [
      {
        nombreCentro: 'Centro',
        nombreReferenciaMaterial: 'Nombre Referencia',
        descripcionRefMaterial: 'Descripcion',
        cantidad: 11,
        importe: 50,
        divisa: 'euro',
      },
      {
        nombreCentro: 'Centro 1',
        nombreReferenciaMaterial: 'Nombre Referencia 1',
        descripcionRefMaterial: 'Descripcion 1',
        cantidad: 14,
        importe: 60,
        divisa: 'dolar',
      },
    ];

    return stock;
  }
}
