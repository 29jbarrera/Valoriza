import { Injectable } from '@angular/core';
import { GastosTaller } from '../Interfaces/gastos-taller.interface';

@Injectable({
  providedIn: 'root',
})
export class GastosTallerService {
  constructor() {}

  async getGastosTaller(): Promise<GastosTaller[]> {
    const gastosTaller: GastosTaller[] = [
      {
        centroProveedor: 'Centro1',
        delegacion: 'delgacion2',
        fecha: new Date(2023, 5, 15),
        proveedor: 1,
        importe: 20,
        divisa: 'EUR',
        referenciaMaterial: 'ref111',
        descripcionRefMaterial: 'descrip11',
        cantidad: 1,
        gastoConmutable: true,
        descripcion: 'Descripción del gasto',
        albaran: 'ALB123',
        archivo: 'file',
      },
      {
        centroProveedor: 'Centro3',
        delegacion: 'Delegacion4',
        fecha: new Date(2024, 2, 10),
        proveedor: 789012,
        importe: 2000,
        divisa: 'USD',
        referenciaMaterial: 'Ref456',
        descripcionRefMaterial: 'Otra descripción del material',
        cantidad: 1,
        gastoConmutable: false,
        descripcion: 'Otra descripción del gasto',
        albaran: 'ALB456',
        archivo: 'file1',
      },
      {
        centroProveedor: 'Centro5',
        delegacion: 'Delegacion6',
        fecha: new Date(2024, 8, 20),
        proveedor: 345678,
        importe: 1800,
        divisa: 'GBP',
        referenciaMaterial: 'Ref789',
        descripcionRefMaterial: 'Descripción adicional del material',
        cantidad: 3,
        gastoConmutable: true,
        descripcion: 'Descripción adicional del gasto',
        albaran: 'ALB789',
        archivo: 'file2',
      },
    ];
    return gastosTaller;
  }
}
