import { Injectable } from '@angular/core';

import { Centro } from '../Interfaces/centro.interface';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor() {}

  async getCentros(): Promise<Centro[]> {
    const centros: Centro[] = [
      {
        nombre: 'Centro',
        nombreReferencia: 'Nombre Referencia',
        descripcion: 'Descripcion',
        cantidad: 11,
        importe: 50,
        divisa: 'euro',
      },
      {
        nombre: 'Centro 1',
        nombreReferencia: 'Nombre Referencia 1',
        descripcion: 'Descripcion 1',
        cantidad: 14,
        importe: 60,
        divisa: 'dolar',
      },
    ];

    return centros;
  }
}
