import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { TacografoDto, TacografoService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class TacografosService {
  constructor(private _tacografoService: TacografoService) {}

  async getTacografos(): Promise<TacografoDto[]> {
    const response = await lastValueFrom(
      this._tacografoService.apiV2TacografoGet()
    );

    return response.results || [];
  }
  async deleteTacografos(tacografosId: number) {
    await lastValueFrom(
      this._tacografoService.apiV2TacografoIdDelete(tacografosId)
    );
  }
}
