import { Injectable } from '@angular/core';

import { InstalacionDto, InstalacionesService as InstalacioneService } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstalacionesService {
  constructor(private _instalacioneService: InstalacioneService) {}

  async getInstalaciones(): Promise<InstalacionDto[]> {
    const response = await lastValueFrom(
      this._instalacioneService.apiV2InstalacionesGet()
    );
    return response.results || [];
  }
  async deleteInstalaciones(instalacionesID: number) {
    await lastValueFrom(this._instalacioneService.apiV2InstalacionesIdDelete(instalacionesID));
  }
}
