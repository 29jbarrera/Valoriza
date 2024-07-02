import { Injectable } from '@angular/core';
import { Preventivo } from './type';

@Injectable({
  providedIn: 'root',
})
export class PreventivoService {
  constructor() {}

  async getPreventivo(): Promise<Preventivo[]> {
    const preventivo: Preventivo[] = [
      {
        machineCenter: 'Centro 1',
        subfamily: 'Subfamilia 1',
        machinery: 'Maquinaria 1',
        level: 'Nivel 1',
        position: 1,
        horomMaint: 100,
        horomFinal: 200,
        kmMaint: 500,
        kmFinal: 1000,
        date: new Date('2024-05-10'),
      },
      {
        machineCenter: 'Centro 2',
        subfamily: 'Subfamilia 2',
        machinery: 'Maquinaria 2',
        level: 'Nivel 2',
        position: 2,
        horomMaint: 150,
        horomFinal: 250,
        kmMaint: 600,
        kmFinal: 1100,
        date: new Date('2024-05-11'),
      },
      {
        machineCenter: 'Centro 3',
        subfamily: 'Subfamilia 3',
        machinery: 'Maquinaria 3',
        level: 'Nivel 3',
        position: 3,
        horomMaint: 200,
        horomFinal: 300,
        kmMaint: 700,
        kmFinal: 1200,
        date: new Date('2024-05-12'),
      },
    ];
    return preventivo
  }
}
