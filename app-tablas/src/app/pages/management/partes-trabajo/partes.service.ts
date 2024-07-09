import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { PartesTrabajoDto, PartesTrabajoService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class PartesService {
  constructor(private _partesTrabajoDocService: PartesTrabajoService) {}

  async getPartes(): Promise<PartesTrabajoDto[]> {
    const response = await lastValueFrom(
      this._partesTrabajoDocService.apiV2PartesTrabajoGet()
    );
    return response.results || [];
  }
  async deletePartes(partesId: number) {
    await lastValueFrom(
      this._partesTrabajoDocService.apiV2PartesTrabajoIdDelete(partesId)
    );
  }
}
