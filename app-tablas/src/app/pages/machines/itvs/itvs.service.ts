import { Injectable } from '@angular/core';
import { Itvs } from './type';

@Injectable({
  providedIn: 'root',
})
export class ItvsService {
  constructor() {}

  async getItvs(): Promise<Itvs[]> {
    const itvs: Itvs[] = [
      {
        machinery: 'maquinaria 1',
        centre: 'centro 1',
        delegation: 'delegación 1',
        family: 'familia 1',
        subfamily: 'subfamilia',
        nextDate: new Date('2024-05-11'),
        comments: 'comentario 1',
      },
      {
        machinery: 'maquinaria 2',
        centre: 'centro 2',
        delegation: 'delegación 2',
        family: 'familia 2',
        subfamily: 'subfamilia 2',
        nextDate: new Date('2024-05-12'),
        comments: 'comentario 2',
      },
      {
        machinery: 'maquinaria 3',
        centre: 'centro 3',
        delegation: 'delegación 3',
        family: 'familia 3',
        subfamily: 'subfamilia 3',
        nextDate: new Date('2024-05-13'),
        comments: 'comentario 3',
      },
    ];
    return itvs;
  }
}
