import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { MaquinariasReparacionesService, ReparacionDto } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ReparacionesService {
  constructor(private _reparacioneService: MaquinariasReparacionesService) {}

  async getReparaciones(): Promise<ReparacionDto[]> {
    const response = await lastValueFrom(
      this._reparacioneService.apiV2ReparacionesGet()
    );
    return response.results || [];
  }
  async deleteReparaciones(reparacionesId: number) {
    await lastValueFrom(
      this._reparacioneService.apiV2ReparacionesIdDelete(reparacionesId)
    );
  }
}
