import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  TasasHistoricoDto,
  TasasHistoricoService,
} from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class TasasCentroService {
  constructor(private _tasasHistoricoService: TasasHistoricoService) {}

  async getTasasCentro(): Promise<TasasHistoricoDto[]> {
    const response = await lastValueFrom(
      this._tasasHistoricoService.apiV2TasasHistoricoGet()
    );
    return response.results || [];
  }
  async deleteTasasCentro(tasasCentroId: number) {
    await lastValueFrom(
      this._tasasHistoricoService.apiV2TasasHistoricoIdDelete(tasasCentroId)
    );
  }
}
