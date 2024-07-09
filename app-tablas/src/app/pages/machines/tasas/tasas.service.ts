import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  TasasHistoricoDto,
  TasasHistoricoService,
} from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class TasasService {
  constructor(private _tasasHistoricoService: TasasHistoricoService) {}

  async getTasas(): Promise<TasasHistoricoDto[]> {
    const response = await lastValueFrom(
      this._tasasHistoricoService.apiV2TasasHistoricoGet()
    );
    return response.results || [];
  }
  async deleteTasas(tasasId: number) {
    await lastValueFrom(
      this._tasasHistoricoService.apiV2TasasHistoricoIdDelete(tasasId)
    );
  }
}
