import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
// TODO: Import the necessary modules
// import {
//   ReferenciasMaterialeDto,
//   ReferenciasMaterialeService,
// } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class MaterialesService {
  constructor(
    // TODO: Import the necessary modules
    // private _referenciasMaterialeService: ReferenciasMaterialeService
  ) {}
  // TODO: Import the necessary modules
  // async getMateriales(): Promise<ReferenciasMaterialeDto[]> {
    async getMateriales(): Promise<any[]> {
    // const response = await lastValueFrom(
    //   this._referenciasMaterialeService.apiV2ReferenciasMaterialeGet()
    // );
    // return response.results || [];
    return [];
  }
  async deleteMateriales(materialesId: number) {
    // TODO: Import the necessary modules
    // await lastValueFrom(
    //   this._referenciasMaterialeService.apiV2ReferenciasMaterialeIdDelete(
    //     materialesId
    //   )
    // );
  }
}
