import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TasasService } from '../../../../service/tasas.service';
import { Tasas } from '../../../../Interfaces/tasas.interface';

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
  selector: 'app-tasas-table',
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
  templateUrl: './tasas-table.component.html',
  styleUrl: './tasas-table.component.css',
})
export class TasasTableComponent implements OnInit {
  tasas: Tasas[] | undefined;
  searchForm: FormGroup;

  constructor (private TasasService: TasasService, private fb: FormBuilder){
    this.searchForm = this.fb.group({
      dateDesde:[''],
      dateHasta:[''],
      centroMaquina:[''],
      subFamilia:[''],
      matricula:[''],
      bastidor:[''],
      tasaTotal:[''],
      tasaChasis:[''],
      divisa:[''],
      implemento1:[''],
      tasa1:[''],
      divisa1:[''],
      implemento2:[''],
      tasa2:[''],
      divisa2:[''],
    });
  }

  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.tasas = await this.TasasService.getTasas();
  }
}
