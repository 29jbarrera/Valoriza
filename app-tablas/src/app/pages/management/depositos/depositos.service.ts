import { Injectable } from '@angular/core';

import { DepositoService, DepositoDto } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepositosService {
  constructor(private _depositoService: DepositoService) {}
  async getDepositos(): Promise<DepositoDto[]> {
    const response = await lastValueFrom(
      this._depositoService.apiV2DepositoGet()
    );
    return response.results || [];
  }
  async deleteDepositos(depositosId: number) {
    await lastValueFrom(
      this._depositoService.apiV2DepositoIdDelete(depositosId)
    );
  }
}
