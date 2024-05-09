import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GastosTaller } from '../../../Interfaces/gastos-taller.interface';

import { GastosTallerService } from '../../../service/gastos-taller.service';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-gastos-table',
  standalone: true,
  imports: [TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    FormlyModule,
    FormlyPrimeNGModule,
  ],
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
      proveedor: [],
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
