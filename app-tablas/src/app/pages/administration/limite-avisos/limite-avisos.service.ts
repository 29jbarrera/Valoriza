import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { ParametroService, ParametroDto } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class LimiteAvisosService {
  constructor(private _parametroService: ParametroService) {}
  async getLimiteAvisos(): Promise<ParametroDto[]> {
    const response = await lastValueFrom(
      this._parametroService.apiV2ParametroGet()
    );
    return response.results || [];
  }
  async deleteLimiteAvisos(limiteAvisosId: number) {
    await lastValueFrom(
      this._parametroService.apiV2ParametroIdDelete(limiteAvisosId)
    );
  }
}
