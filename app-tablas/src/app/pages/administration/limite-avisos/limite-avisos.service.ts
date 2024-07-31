import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { AppParameterService, ParametroDto } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class LimiteAvisosService {
  constructor(private _parametroService: AppParameterService) {}
  async getLimiteAvisos(): Promise<ParametroDto[]> {
    const response = await lastValueFrom(
      this._parametroService.apiV2ParametrosGet()
    );
    return response.results || [];
  }
  async deleteLimiteAvisos(limiteAvisosId: number) {
    await lastValueFrom(
      this._parametroService.apiV2ParametrosIdDelete(limiteAvisosId)
    );
  }
}
