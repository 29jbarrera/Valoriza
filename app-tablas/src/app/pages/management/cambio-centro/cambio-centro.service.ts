import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { MaquinariaDto, MaquinariaService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class CambioCentroService {
  constructor(private _maquinariaService: MaquinariaService) {}
  async getCambioCentro(): Promise<MaquinariaDto[]> {
    const response = await lastValueFrom(
      this._maquinariaService.apiV2MaquinariaGet()
    );
    return response.results || [];
  }
  async deleteCambioCentro(cambiocentroId: number) {
    await lastValueFrom(
      this._maquinariaService.apiV2MaquinariaIdDelete(cambiocentroId)
    );
  }
}
