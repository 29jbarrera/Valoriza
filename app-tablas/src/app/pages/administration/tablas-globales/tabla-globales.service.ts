import { Injectable } from '@angular/core';

import { GlobalTablesService, XGlobalTableDto } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaGlobalesService {
  constructor(private _xGlobalTableService: GlobalTablesService) {}
  async getGlobales(): Promise<XGlobalTableDto[]> {
    const response = await lastValueFrom(
      this._xGlobalTableService.apiV2GlobalTablesGet()
    );
    return response.results || [];
  }
  async deleteGlobales(globalesId: number) {
    await lastValueFrom(
      this._xGlobalTableService.apiV2GlobalTablesIdDelete(globalesId)
    );
  }
}
