import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { ProveedorDto, ProveedoresService as ProveedorService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  constructor(private _proveedoresService: ProveedorService) {}
  async getProveedores(): Promise<ProveedorDto[]> {
    const response = await lastValueFrom(
      this._proveedoresService.apiV2ProveedoresGet()
    );
    return response.results || [];
  }
  async deleteProveedores(proveedoresId: number) {
    await lastValueFrom(
      this._proveedoresService.apiV2ProveedoresIdDelete(proveedoresId)
    );
  }
}
