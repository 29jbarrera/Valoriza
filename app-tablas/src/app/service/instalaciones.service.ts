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
        installationCentre: 'centro1',
        name: 'Nombre1',
        comments: 'Comentario número 1',
      },
      {
        installationCentre: 'centro2',
        name: 'Nombre2',
        comments: 'Comentario número 2',
      },
      {
        installationCentre: 'centro3',
        name: 'Nombre3',
        comments: 'Comentario número 3',
      },
    ];
    return instalaciones;
  }
}
