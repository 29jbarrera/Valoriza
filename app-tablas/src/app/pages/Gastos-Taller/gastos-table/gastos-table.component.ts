import { Component, OnInit } from '@angular/core';

import { GastosTaller } from '../../../Interfaces/gastos-taller.interface';

import { FormGroup, FormBuilder } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { GastosTallerService } from '../../../service/gastos-taller.service';

@Component({
  selector: 'app-gastos-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './gastos-table.component.html',
  styleUrl: './gastos-table.component.css',
})
export class GastosTableComponent implements OnInit {
  gastosTaller: GastosTaller[] | undefined;
  searchForm: FormGroup;

  constructor(
    private GastosTallerService: GastosTallerService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      centroProveedor: [''],
      delegacion: [''],
      fecha: [''],
      proveedor: [''],
      importe: [''],
      divisa: [''],
      referenciaMaterial: [''],
      descripcionRefMaterial: [''],
      cantidad: [''],
      gastoConmutable: [''],
      descripcion: [''],
      albaran: [''],
      archivo: [''],
    });
  }
  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.gastosTaller = await this.GastosTallerService.getGastosTaller();
  }
}
