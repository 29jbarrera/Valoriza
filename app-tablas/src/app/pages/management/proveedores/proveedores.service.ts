import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { ProveedoreDto, ProveedoreService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  constructor(private _proveedoresService: ProveedoreService) {}
  async getProveedores(): Promise<ProveedoreDto[]> {
    const response = await lastValueFrom(this._proveedoresService.apiV2ProveedoreGet());
    return response.results || [];

    // const proveedores: Proveedores[] = [];
    // for (let i = 0; i < 100; i++) {
    //   proveedores.push({
    //     DocIdentification: randCurrencyName(),
    //     name: randCompanyName(),
    //     address: randBrand(),
    //     phone: randAmount({ min: 10000000, max: 999999999 }),
    //     comments: randProductDescription(),
    //     SAP: '',
    //   });
    // }
    // return proveedores;
  }
}
