import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  InspeccionTecnicaDto,
  MaquinariasInspeccionesTecnicasService as InspeccionesTecnicaService,
} from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ItvsService {
  constructor(
    private _inspeccionesTecnicaService: InspeccionesTecnicaService
  ) {}

  async getItvs(): Promise<InspeccionTecnicaDto[]> {
    const response = await lastValueFrom(
      this._inspeccionesTecnicaService.apiV2InspeccionesGet()
    );
    return response.results || [];
  }
  async deleteItvs(itvsId: number) {
    await lastValueFrom(
      this._inspeccionesTecnicaService.apiV2InspeccionesIdDelete(itvsId)
    );
  }
}
