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
        maquinaria: "maquinaria 1",
        centro: 'Centro 1',
        delegacion: 'Delegacion 1',
        familia: 'Familia 1',
        subfamilia: 'Sub Familia 1',
        fechaproxima: '12/12/2020',
      },
      {
        maquinaria: "maquinaria 2",
        centro: 'Centro 2',
        delegacion: 'Delegacion 2',
        familia: 'Familia 2',
        subfamilia: 'Sub Familia 2',
        fechaproxima: '12/12/2030',
      },
      {
        maquinaria: "maquinaria 3",
        centro: 'Centro 3',
        delegacion: 'Delegacion 3',
        familia: 'Familia 3',
        subfamilia: 'Sub Familia 3',
        fechaproxima: '12/12/2040',
      },
      {
        maquinaria: "maquinaria 4",
        centro: 'Departamento',
        delegacion: 'Deporte',
        familia: 'Deportiva',
        subfamilia: 'Ingeniería',
        fechaproxima: '10/10/2020',
      },
    ];
    return gruas;
  }

  async buscarGruas(filtros: any): Promise<Gruas[]> {
    const gruas = await this.getGruas();
    // Aplicar filtros
    const gruasFiltradas = gruas.filter((grua) => {
      const centroMinusculas = grua.centro.toLowerCase();
      const filtroCentroMinusculas = filtros.centro.toLowerCase();
      if (filtros.centro) {
        return centroMinusculas.includes(filtroCentroMinusculas);
      } else {
        return true;
      }
    });
    return gruasFiltradas;
  }
}
