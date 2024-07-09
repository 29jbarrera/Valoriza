import { Injectable } from '@angular/core';

import { InstalacioneDto, InstalacioneService } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstalacionesService {
  constructor(private _instalacioneService: InstalacioneService) {}

  async getInstalaciones(): Promise<InstalacioneDto[]> {
    const response = await lastValueFrom(this._instalacioneService.apiV2InstalacioneGet())
    return response.results || [];

    // const instalaciones: Instalaciones[] = [
    //   {
    //     installationCentre: 'centro1',
    //     name: 'Nombre1',
    //     comments: 'Comentario número 1',
    //   },
    //   {
    //     installationCentre: 'centro2',
    //     name: 'Nombre2',
    //     comments: 'Comentario número 2',
    //   },
    //   {
    //     installationCentre: 'centro3',
    //     name: 'Nombre3',
    //     comments: 'Comentario número 3',
    //   },
    // ];
    // return instalaciones;
  }
}
