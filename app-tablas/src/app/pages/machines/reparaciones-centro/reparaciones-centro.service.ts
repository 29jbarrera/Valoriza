import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  ReparacionesDocDto,
  MaquinariasReparacionesDocsService,
} from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ReparacionesCentroService {
  constructor(private _reparacionesDocService: MaquinariasReparacionesDocsService) {}

  async getReparacionesCentro(): Promise<ReparacionesDocDto[]> {
    const response = await lastValueFrom(
      this._reparacionesDocService.apiV2ReparacionesDocsGet()
    );
    return response.results || [];
  }
  async deleteReparacionesCentro(reparacionesCentroid: string) {
    await lastValueFrom(
      this._reparacionesDocService.apiV2ReparacionesDocsClaveGuidDelete(
        reparacionesCentroid
      )
    );
  }
}
