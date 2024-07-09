import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { MaquinariaDocDto, MaquinariaService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class CambioCentroService {
  constructor(private _maquinariaService: MaquinariaService) {}
  async getCambioCentro(): Promise<MaquinariaDocDto[]> {
    const response = await lastValueFrom(this._maquinariaService.apiV2MaquinariaGet());
    return response.results;
    

    // const cambioCentro: CambioCentro[] = [];
    // for (let i = 0; i < 100; i++) {
    //   cambioCentro.push({
    //     selected: true,
    //     machineryTuition: randArn(),
    //     centerCode: randAmount(),
    //     centerName: randCompanyName(),
    //     destinationCenterCode: randAmount(),
    //     destinationCenterName: randCompanyName(),
    //   });
    // }
    // return cambioCentro;
  }
}
