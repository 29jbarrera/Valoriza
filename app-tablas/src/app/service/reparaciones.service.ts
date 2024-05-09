import { Injectable } from '@angular/core';
import { Reparaciones } from '../Interfaces/reparaciones.interface';

@Injectable({
  providedIn: 'root',
})
export class ReparacionesService {
  constructor() {}

  async getReparaciones(): Promise<Reparaciones[]> {
    const reparaciones: Reparaciones[] = [
      {
        centroReparador: 'Centro A',
        maquinaria: 'Máquina 1',
        tipoActuacion: 'Reparación',
        tipoMantenimiento: 'Correctivo',
        fecha: new Date('2024-05-10'),
        proveedor: 'Proveedor X',
        albaran: 'ABC123',
        coste: 1000,
        divisa: 'EUR',
        descripcion: 'Reparación de componentes dañados',
      },
      {
        centroReparador: 'Centro B',
        maquinaria: 'Máquina 2',
        tipoActuacion: 'Mantenimiento preventivo',
        tipoMantenimiento: 'Preventivo',
        fecha: new Date('2024-05-15'),
        proveedor: 'Proveedor Y',
        albaran: 'XYZ789',
        coste: 1500,
        divisa: 'EUR',
        descripcion: 'Cambio de aceite y filtros',
      },
      {
        centroReparador: 'Centro C',
        maquinaria: 'Máquina 3',
        tipoActuacion: 'Revisión',
        tipoMantenimiento: 'Preventivo',
        fecha: new Date('2024-05-20'),
        proveedor: 'Proveedor Z',
        albaran: 'DEF456',
        coste: 1200,
        divisa: 'EUR',
        descripcion: 'Inspección general de la máquina',
      },
    ];
    return reparaciones;
  }
}
