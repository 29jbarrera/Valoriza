import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ReparacionesCentroService } from '../../../../service/reparaciones-centro.service';
import { ReparacionesCentro } from '../../../../Interfaces/reparaciones-centro.interface';

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
  selector: 'app-reparaciones-centro-table',
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
  templateUrl: './reparaciones-centro-table.component.html',
  styleUrl: './reparaciones-centro-table.component.css'
})
export class ReparacionesCentroTableComponent implements OnInit {
  reparacionesCentro: ReparacionesCentro[] | undefined;
  searchForm: FormGroup;

  constructor (private ReparacionesCentroService: ReparacionesCentroService, private fb: FormBuilder){
    this.searchForm = this.fb.group({
      code:[''],
      name:[''],
      delagation:[''],
      cost:[''],
    });
  }

  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.reparacionesCentro = await this.ReparacionesCentroService.getReparacionesCentro();
  }
}
