import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  InspeccionesTecnicaDto,
  InspeccionesTecnicaService,
} from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ItvsService {
  constructor(
    private _inspeccionesTecnicaService: InspeccionesTecnicaService
  ) {}

  async getItvs(): Promise<InspeccionesTecnicaDto[]> {
    const response = await lastValueFrom(
      this._inspeccionesTecnicaService.apiV2InspeccionesTecnicaGet()
    );
    return response.results || [];
  }
  async deleteItvs(itvsId: number) {
    await lastValueFrom(
      this._inspeccionesTecnicaService.apiV2InspeccionesTecnicaIdDelete(itvsId)
    );
  }
}
