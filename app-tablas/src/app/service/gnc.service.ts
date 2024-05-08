import { Injectable } from '@angular/core';

import { Gnc } from '../Interfaces/gnc.interface';

@Injectable({
  providedIn: 'root'
})
export class GncService {

  constructor() { }
  async getGnc(): Promise<Gnc[]> {
    const gnc: Gnc[] = [
      {
        maquinaria: 1,
        nombrecentro: 'Centro 1',
        delegacion: 'Delegacion 1',
        familia: 'Familia 1',
        subfamilia: 'Sub Familia 1',
        fechaproxima: new Date(2023, 5, 15),
      },
      {
        maquinaria: 2,
        nombrecentro: 'Centro 2',
        delegacion: 'Delegacion 2',
        familia: 'Familia 2',
        subfamilia: 'Sub Familia 2',
        fechaproxima: new Date(2023, 5, 15),
      },
      {
        maquinaria: 3,
        nombrecentro: 'Centro 3',
        delegacion: 'Delegacion 3',
        familia: 'Familia 3',
        subfamilia: 'Sub Familia 3',
        fechaproxima: new Date(2025, 5, 15),
      },
      {
        maquinaria: 4,
        nombrecentro: 'Departamento',
        delegacion: 'Deporte',
        familia: 'Deportiva',
        subfamilia: 'Ingeniería',
        fechaproxima: new Date(2024, 5, 15),
      },
    ];
    return gnc;
  }
}
