import { Injectable } from '@angular/core';

import { DepositosService as DepositoService, DepositoDto } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepositosService {
  constructor(private _depositoService: DepositoService) {}
  async getDepositos(): Promise<DepositoDto[]> {
    const response = await lastValueFrom(
      this._depositoService.apiV2DepositosGet()
    );
    return response.results || [];
  }
  async deleteDepositos(depositosId: number) {
    await lastValueFrom(
      this._depositoService.apiV2DepositosIdDelete(depositosId)
    );
  }
}
