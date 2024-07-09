import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { ReparacioneDto, ReparacioneService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ReparacionesService {
  constructor(private _reparacioneService: ReparacioneService) {}

  async getReparaciones(): Promise<ReparacioneDto[]> {
    const response = await lastValueFrom(
      this._reparacioneService.apiV2ReparacioneGet()
    );
    return response.results || [];
  }
  async deleteReparaciones(reparacionesId: number) {
    await lastValueFrom(
      this._reparacioneService.apiV2ReparacioneIdDelete(reparacionesId)
    );
  }
}
