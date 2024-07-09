import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  ReferenciasMaterialeDto,
  ReferenciasMaterialeService,
} from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class MaterialesService {
  constructor(
    private _referenciasMaterialeService: ReferenciasMaterialeService
  ) {}
  async getMateriales(): Promise<ReferenciasMaterialeDto[]> {
    const response = await lastValueFrom(
      this._referenciasMaterialeService.apiV2ReferenciasMaterialeGet()
    );
    return response.results || [];
  }
  async deleteMateriales(materialesId: number) {
    await lastValueFrom(
      this._referenciasMaterialeService.apiV2ReferenciasMaterialeIdDelete(
        materialesId
      )
    );
  }
}
