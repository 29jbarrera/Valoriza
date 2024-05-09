import { Injectable } from '@angular/core';
import { Preventivo } from '../Interfaces/preventivo.interface';

@Injectable({
  providedIn: 'root',
})
export class PreventivoService {
  constructor() {}

  async getPreventivo(): Promise<Preventivo[]> {
    const preventivo: Preventivo[] = [
      {
        centroMaquina: 'Centro 1',
        subfamilia: 'Subfamilia 1',
        maquinaria: 'Maquinaria 1',
        nivel: 'Nivel 1',
        posicion: 1,
        horomMant: 100,
        horomFinal: 200,
        kmMant: 500,
        kmFinal: 1000,
        fecha: new Date('2024-05-10'),
      },
      {
        centroMaquina: 'Centro 2',
        subfamilia: 'Subfamilia 2',
        maquinaria: 'Maquinaria 2',
        nivel: 'Nivel 2',
        posicion: 2,
        horomMant: 150,
        horomFinal: 250,
        kmMant: 600,
        kmFinal: 1100,
        fecha: new Date('2024-05-11'),
      },
      {
        centroMaquina: 'Centro 3',
        subfamilia: 'Subfamilia 3',
        maquinaria: 'Maquinaria 3',
        nivel: 'Nivel 3',
        posicion: 3,
        horomMant: 200,
        horomFinal: 300,
        kmMant: 700,
        kmFinal: 1200,
        fecha: new Date('2024-05-12'),
      },
    ];
    return preventivo
  }
}
