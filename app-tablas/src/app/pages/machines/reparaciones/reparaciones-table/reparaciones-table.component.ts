import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ReparacionesService } from '../../../../service/reparaciones.service';

import { Reparaciones } from '../../../../Interfaces/reparaciones.interface';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-reparaciones-table',
  standalone: true,
  imports: [
    TableModule,
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
  templateUrl: './reparaciones-table.component.html',
  styleUrl: './reparaciones-table.component.css',
})
export class ReparacionesTableComponent implements OnInit {
  reparaciones: Reparaciones[] | undefined;
  searchForm: FormGroup;

  constructor (private ReparacionesService: ReparacionesService, private fb: FormBuilder){
    this.searchForm = this.fb.group({
      centroReparador:[''],
      maquinaria:[''],
      tipoActuacion:[''],
      tipoMantenimiento:[''],
      date:[''],
      proveedor:[''],
      albaran:[''],
      cost:[''],
      divisa:[''],
      description:[''],
    });
  }

  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.reparaciones = await this.ReparacionesService.getReparaciones();
  }
}
