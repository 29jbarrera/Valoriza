import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { ReferenciasMaterialeDto, ReferenciasMaterialeService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class MaterialesService {
  constructor(private _referenciasMaterialeService: ReferenciasMaterialeService) {}
  async getMateriales(): Promise<ReferenciasMaterialeDto[]> {
    const response = await lastValueFrom(this._referenciasMaterialeService.apiV2ReferenciasMaterialeGet());
    return response.results || [];


    //   const materiales: Materiales[] = [];
    //   for (let i = 0; i < 100; i++) {
    //     materiales.push({
    //       reference: randBrand(),
    //       description: randProductDescription(),
    //       category: randBrand(),
    //     });
    //   }
    //   return materiales;
  }
}
