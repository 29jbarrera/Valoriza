import { Injectable } from '@angular/core';

import { XGlobalTableService, XGlobalTableDto } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaGlobalesService {
  constructor(private _xGlobalTableService: XGlobalTableService) {}
  async getGlobales(): Promise<XGlobalTableDto[]> {
    const response = await lastValueFrom(
      this._xGlobalTableService.apiV2XGlobalTableGet()
    );
    return response.results || [];
  }
  async deleteGlobales(globalesId: number) {
    await lastValueFrom(
      this._xGlobalTableService.apiV2XGlobalTableIdDelete(globalesId)
    );
  }
}
