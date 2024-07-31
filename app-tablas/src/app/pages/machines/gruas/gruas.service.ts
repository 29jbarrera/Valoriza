import { Injectable } from '@angular/core';

// TODO: Import the necessary modules
import { GruasDocDto } from '@valoriza/web-commons';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GruasService {
  constructor(
    // private _gruasService: GruasDocService
  ) {}

  async getGruas(): Promise<GruasDocDto[]> {
    // const response = await lastValueFrom(this._gruasService.apiV2GruasDocGet());
    // return response.results || [];
    return [];
  }

  async deleteGruas(gruasID: number){
    // await lastValueFrom(this._gruasService.apiV2GruasDocIdDelete(gruasID))
  }
}
