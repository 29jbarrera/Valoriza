import { Injectable } from '@angular/core';
// TODO: Import the necessary modules
import { HmKmDto } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HorometrosKilometrosService {
  constructor() // private _hmkmService: HmKmService

  {}

  // async getHorometrosKilometros(): Promise<HmKmDto[]> {
    async getHorometrosKilometros(): Promise<any[]> {
    // const response = await lastValueFrom(this._hmkmService.apiV2HmKmGet());
    // return response.results || [];
    return [];
  }
  async deleteHorometrosKilometros(hmkmID: number) {
    // await lastValueFrom(this._hmkmService.apiV2HmKmIdDelete(hmkmID));
  }
}
