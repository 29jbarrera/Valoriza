import { Injectable } from '@angular/core';
import { Itvs } from '../Interfaces/itvs.interface';

@Injectable({
  providedIn: 'root',
})
export class ItvsService {
  constructor() {}

  async getItvs(): Promise<Itvs[]> {
    const itvs: Itvs[] = [
      {
        maquinaria: 'maquinaria 1',
        centro: 'centro 1',
        delegacion: 'delegación 1',
        familia: 'familia 1',
        subfamilia: 'subfamilia',
        comentarios: 'comentario 1',
      },
      {
        maquinaria: 'maquinaria 2',
        centro: 'centro 2',
        delegacion: 'delegación 2',
        familia: 'familia 2',
        subfamilia: 'subfamilia 2',
        comentarios: 'comentario 2',
      },
      {
        maquinaria: 'maquinaria 3',
        centro: 'centro 3',
        delegacion: 'delegación 3',
        familia: 'familia 3',
        subfamilia: 'subfamilia 3',
        comentarios: 'comentario 3',
      },
    ];
    return itvs;
  }
}
