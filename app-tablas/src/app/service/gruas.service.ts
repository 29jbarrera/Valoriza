import { Injectable } from '@angular/core';

import { Gruas } from '../Interfaces/gruas.interface';

@Injectable({
  providedIn: 'root',
})
export class GruasService {
  constructor() {}

  async getGruas(): Promise<Gruas[]> {
    const gruas: Gruas[] = [
      {
        machinery: 'maquinaria 1',
        center: 'Centro 1',
        delegation: 'Delegacion 1',
        family: 'Familia 1',
        subFamily: 'Sub Familia 1',
        nextDate: '12/12/2020',
      },
      {
        machinery: 'maquinaria 2',
        center: 'Centro 2',
        delegation: 'Delegacion 2',
        family: 'Familia 2',
        subFamily: 'Sub Familia 2',
        nextDate: '12/12/2030',
      },
      {
        machinery: 'maquinaria 3',
        center: 'Centro 3',
        delegation: 'Delegacion 3',
        family: 'Familia 3',
        subFamily: 'Sub Familia 3',
        nextDate: '12/12/2040',
      },
    ];
    return gruas;
  }
}
