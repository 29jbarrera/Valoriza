import { Injectable } from '@angular/core';
import { Instalaciones } from '../Interfaces/instalaciones.interface';

@Injectable({
  providedIn: 'root',
})
export class InstalacionesService {
  constructor() {}

  async getInstalaciones(): Promise<Instalaciones[]> {
    const instalaciones: Instalaciones[] = [
      {
        centroInstalacion: 'centro1',
        nombre: 'Nombre1',
        comentarios: 'Comentario número 1',
      },
      {
        centroInstalacion: 'centro2',
        nombre: 'Nombre2',
        comentarios: 'Comentario número 2',
      },
      {
        centroInstalacion: 'centro3',
        nombre: 'Nombre3',
        comentarios: 'Comentario número 3',
      },
    ];
    return instalaciones;
  }
}
