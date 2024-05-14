import { Injectable } from '@angular/core';
import {
  randAmount,
  randBrand,
  randCompanyName,
  randCurrencyName,
  randProductDescription,
} from '@ngneat/falso';

import { Proveedores } from '../Interfaces/proveedores.interface';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  constructor() {}
  async getProveedores(): Promise<Proveedores[]> {
    const proveedores: Proveedores[] = [];
    for (let i = 0; i < 100; i++) {
      proveedores.push({
        DocIdentificacion: randCurrencyName(),
        name: randCompanyName(),
        address: randBrand(),
        phone: randAmount({ min: 10000000, max: 999999999 }),
        comments: randProductDescription(),
        SAP: '',
      });
    }
    return proveedores;
  }
}
