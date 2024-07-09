import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { GncDto, GncService as GncServiceAG } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class GncService {
  constructor(private _gncService: GncServiceAG) {}
  async getGnc(): Promise<GncDto[]> {
    const response = await lastValueFrom(this._gncService.apiV2GncGet());
    return response.results || [];
  }
  async deleteGnc(gncId: number) {
    await lastValueFrom(this._gncService.apiV2GncIdDelete(gncId));
  }
}
