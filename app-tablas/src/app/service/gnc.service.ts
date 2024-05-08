import { Injectable } from '@angular/core';

import { Gnc } from '../Interfaces/gnc.interface';

@Injectable({
  providedIn: 'root'
})
export class GncService {

  constructor() { }
  async getGnc(): Promise<Gnc[]> {
    // Datos ficticios de prueba
    const gnc: Gnc[] = [
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
      {
        maquinaria: 4,
        centro: 'Departamento',
        delegacion: 'Deporte',
        familia: 'Deportiva',
        subfamilia: 'Ingeniería',
        fechaproxima: '10/10/2020',
      },
    ];
    return gnc;
  }
}
