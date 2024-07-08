import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  ReparacionesDocDto,
  ReparacionesDocService,
} from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class ReparacionesCentroService {
  constructor(private _reparacionesDocService: ReparacionesDocService) {}

  async getReparacionesCentro(): Promise<ReparacionesDocDto[]> {
    const response = await lastValueFrom(
      this._reparacionesDocService.apiV2ReparacionesDocGet()
    );
    return response.results;

    // const reparacionesCentro: ReparacionesCentro[] = [];
    // for (let i = 0; i < 100; i++) {
    //   reparacionesCentro.push({
    //     code: randAmount({ min: 10, max: 100 }),
    //     name: randCompanyName(),
    //     delegation: randProductDescription(),
    //     cost: randAmount({ min: 10, max: 100 }),
    //   });
    // }

    // return reparacionesCentro;
  }
}
