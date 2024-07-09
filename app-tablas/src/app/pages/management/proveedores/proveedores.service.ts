import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { ProveedoreDto, ProveedoreService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  constructor(private _proveedoresService: ProveedoreService) {}
  async getProveedores(): Promise<ProveedoreDto[]> {
    const response = await lastValueFrom(
      this._proveedoresService.apiV2ProveedoreGet()
    );
    return response.results || [];
  }
  async deleteProveedores(proveedoresId: number) {
    await lastValueFrom(
      this._proveedoresService.apiV2ProveedoreIdDelete(proveedoresId)
    );
  }
}
