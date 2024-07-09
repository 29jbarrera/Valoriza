import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { SeguroService, SeguroDto } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class SegurosService {
  constructor(private _seguroService: SeguroService) {}

  async getSeguros(): Promise<SeguroDto[]> {
    const response = await lastValueFrom(this._seguroService.apiV2SeguroGet());
    return response.results || [];
  }
  async deleteSeguros(segurosId: number) {
    await lastValueFrom(this._seguroService.apiV2SeguroIdDelete(segurosId));
  }
}
