import { Injectable } from '@angular/core';

import { InstalacioneDto, InstalacioneService } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstalacionesService {
  constructor(private _instalacioneService: InstalacioneService) {}

  async getInstalaciones(): Promise<InstalacioneDto[]> {
    const response = await lastValueFrom(
      this._instalacioneService.apiV2InstalacioneGet()
    );
    return response.results || [];
  }
  async deleteInstalaciones(instalacionesID: number) {
    await lastValueFrom(this._instalacioneService.apiV2InstalacioneIdDelete(instalacionesID));
  }
}
