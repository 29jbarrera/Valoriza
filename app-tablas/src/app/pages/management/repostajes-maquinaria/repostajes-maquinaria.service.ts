import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import {
  MantenimientoRepostajeService,
  MantenimientoRepostajeDto,
} from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class RepostajesService {
  constructor(
    private _mantenimientoRepostajeService: MantenimientoRepostajeService
  ) {}
  async getRepostajes(): Promise<MantenimientoRepostajeDto[]> {
    const response = await lastValueFrom(
      this._mantenimientoRepostajeService.apiV2MantenimientoRepostajeGet()
    );
    return response.results || [];
  }
  async deleteRepostajes(repostajesId: number) {
    await lastValueFrom(
      this._mantenimientoRepostajeService.apiV2MantenimientoRepostajeIdDelete(
        repostajesId
      )
    );
  }
}
