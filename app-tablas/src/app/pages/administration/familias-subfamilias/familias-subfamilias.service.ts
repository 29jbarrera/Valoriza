import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { FamiliaDto, FamiliasService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class FamiliasSubfamiliasService {
  constructor(private _familiaService: FamiliasService) {}
  async getFamiliasSubfamilias(): Promise<FamiliaDto[]> {
    const response = await lastValueFrom(
      this._familiaService.apiV2FamiliasGet()
    );
    return response.results || [];
  }
  async deleteFamiliasSubfamilias(familiasSubfamiliasId: number) {
    await lastValueFrom(
      this._familiaService.apiV2FamiliasIdDelete(familiasSubfamiliasId)
    );
  }
}
