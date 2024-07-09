import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  ReparacionesDocDto,
  ReparacionesDocService,
} from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ReparacionesCentroService {
  constructor(private _reparacionesDocService: ReparacionesDocService) {}

  async getReparacionesCentro(): Promise<ReparacionesDocDto[]> {
    const response = await lastValueFrom(
      this._reparacionesDocService.apiV2ReparacionesDocGet()
    );
    return response.results || [];
  }
  async deleteReparacionesCentro(reparacionesCentroid: number) {
    await lastValueFrom(
      this._reparacionesDocService.apiV2ReparacionesDocIdDelete(
        reparacionesCentroid
      )
    );
  }
}
