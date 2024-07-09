import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { FamiliaDto, FamiliaService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class FamiliasSubfamiliasService {
  constructor(private _familiaService: FamiliaService) {}
  async getFamiliasSubfamilias(): Promise<FamiliaDto[]> {
    const response = await lastValueFrom(
      this._familiaService.apiV2FamiliaGet()
    );
    return response.results || [];
  }
  async deleteFamiliasSubfamilias(familiasSubfamiliasId: number) {
    await lastValueFrom(
      this._familiaService.apiV2FamiliaIdDelete(familiasSubfamiliasId)
    );
  }
}
