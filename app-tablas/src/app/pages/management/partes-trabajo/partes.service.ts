import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { ParteTrabajoDto, PartesDeTrabajoMecanicosService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class PartesService {
  constructor(private _partesTrabajoDocService: PartesDeTrabajoMecanicosService) {}

  async getPartes(): Promise<ParteTrabajoDto[]> {
    const response = await lastValueFrom(
      this._partesTrabajoDocService.apiV2ParteTrabajoMecanicoGet()
    );
    return response.results || [];
  }
  async deletePartes(partesId: number) {
    await lastValueFrom(
      this._partesTrabajoDocService.apiV2ParteTrabajoMecanicoIdDelete(partesId)
    );
  }
}
