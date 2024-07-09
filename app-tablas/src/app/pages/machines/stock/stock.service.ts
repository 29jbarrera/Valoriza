import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  StockDto,
  StockService as StockServiceAG,
} from '@valoriza/web-commons';
@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private _stockService: StockServiceAG) {}

  async getStock(): Promise<StockDto[]> {
    const response = await lastValueFrom(this._stockService.apiV2StockGet());
    return response.results || [];
  }

  async deleteStock(stockId: number) {
    await lastValueFrom(this._stockService.apiV2StockIdDelete(stockId));
  }
}
