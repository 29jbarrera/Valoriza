import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { ParametroService, ParametroDto } from '@valoriza/web-commons'

@Injectable({
  providedIn: 'root',
})
export class LimiteAvisosService {
  constructor(private _parametroService: ParametroService) {}
  async getLimiteAvisos(): Promise<ParametroDto[]> {
    const response = await lastValueFrom(this._parametroService.apiV2ParametroGet());
    return response.results || [];

    // const limiteAvisos: LimiteAvisos[] = [];
    // for (let i = 0; i < 100; i++) {
    //   limiteAvisos.push({
    //     code: randCompanyName(),
    //     value: randAmount(),
    //     description: randProductDescription(),
    //   });
    // }
    // return limiteAvisos;
  }
}
