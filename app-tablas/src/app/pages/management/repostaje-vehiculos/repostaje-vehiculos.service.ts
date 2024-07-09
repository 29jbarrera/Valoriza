import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { RepostajeDto, RepostajeService } from '@valoriza/web-commons';

@Injectable({
  providedIn: 'root',
})
export class RepostajeVehiculosService {
  constructor(private _repostajeService: RepostajeService) {}
  async getRepostajeVehiculos(): Promise<RepostajeDto[]> {
    const response = await lastValueFrom(
      this._repostajeService.apiV2RepostajeGet()
    );
    return response.results || [];
  }
  async deleteRepostajeVehículos(repostajeVehiculosId: number) {
    await lastValueFrom(
      this._repostajeService.apiV2RepostajeIdDelete(repostajeVehiculosId)
    );
  }
}
