import { Injectable } from '@angular/core';

import { HmKmDto, HmKmService } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HorometrosKilometrosService {
  constructor(private _hmkmService: HmKmService) {}

  async getHorometrosKilometros(): Promise<HmKmDto[]> {
    const response = await lastValueFrom(this._hmkmService.apiV2HmKmGet());
    return response.results || [];
  }
  async deleteHorometrosKilometros(hmkmID: number) {
    await lastValueFrom(this._hmkmService.apiV2HmKmIdDelete(hmkmID));
  }
}
