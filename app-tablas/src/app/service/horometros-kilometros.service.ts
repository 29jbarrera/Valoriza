import { Injectable } from '@angular/core';
import { HorometrosKilometros } from '../Interfaces/horometros-kilometros.interface';

@Injectable({
  providedIn: 'root'
})
export class HorometrosKilometrosService {

  constructor() {}

  async getHorometrosKilometros(): Promise<HorometrosKilometros[]> {
    const horometrosKilometros: HorometrosKilometros[] = [
      {
        centroMaquina: 'Centro A',
        subFamilia: 'Subfamilia X',
        maquinaria: 'Máquina 1',
        marca: 'Marca A',
        modelo: 'Modelo 123',
        horometroFinal: 1000,
        kilometroFinal: 500,
        fecha: new Date('2024-05-10')
      },
      {
        centroMaquina: 'Centro B',
        subFamilia: 'Subfamilia Y',
        maquinaria: 'Máquina 2',
        marca: 'Marca B',
        modelo: 'Modelo 456',
        horometroFinal: 2000,
        kilometroFinal: 1000,
        fecha: new Date('2024-05-11')
      },
      {
        centroMaquina: 'Centro C',
        subFamilia: 'Subfamilia Z',
        maquinaria: 'Máquina 3',
        marca: 'Marca C',
        modelo: 'Modelo 789',
        horometroFinal: 3000,
        kilometroFinal: 1500,
        fecha: new Date('2024-05-12')
      }
    ];
    return horometrosKilometros;
  }
}
