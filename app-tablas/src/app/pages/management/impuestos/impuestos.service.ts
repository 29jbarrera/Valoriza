import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { ImpuestoDto, ImpuestoService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ImpuestosService {
  constructor(private _impuestoService: ImpuestoService) {}

  async getImpuestos(): Promise<ImpuestoDto[]> {
    const response = await lastValueFrom(
      this._impuestoService.apiV2ImpuestoGet()
    );
    return response.results || [];
  }
  async deleteImpuestos(impuestosId: number) {
    await lastValueFrom(
      this._impuestoService.apiV2ImpuestoIdDelete(impuestosId)
    );
  }
}
