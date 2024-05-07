import { Injectable } from '@angular/core';

import { Gruas } from '../Interfaces/gruas.interface';

@Injectable({
  providedIn: 'root',
})
export class GruasService {
  constructor() {}

  async getGruas(): Promise<Gruas[]> {
    // Datos ficticios de prueba
    const gruas: Gruas[] = [
      {
        maquinaria: 1,
        centro: 'Centro 1',
        delegacion: 'Delegacion 1',
        familia: 'Familia 1',
        subfamilia: 'Sub Familia 1',
        fechaproxima: '12/12/2020',
      },
      {
        maquinaria: 2,
        centro: 'Centro 2',
        delegacion: 'Delegacion 2',
        familia: 'Familia 2',
        subfamilia: 'Sub Familia 2',
        fechaproxima: '12/12/2030',
      },
      {
        maquinaria: 3,
        centro: 'Centro 3',
        delegacion: 'Delegacion 3',
        familia: 'Familia 3',
        subfamilia: 'Sub Familia 3',
        fechaproxima: '12/12/2040',
      },
    ];
    return gruas;
  }
}
