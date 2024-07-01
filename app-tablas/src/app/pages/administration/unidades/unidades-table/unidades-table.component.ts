import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Unidades } from '../type';
import { UnidadesService } from '../unidades.service';

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
  selector: 'app-unidades-table',
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
  templateUrl: './unidades-table.component.html',
  styleUrl: './unidades-table.component.scss'
})
export class UnidadesTableComponent implements OnInit {
  unidades: Unidades[] = [];
  searchForm: FormGroup;

  constructor(
    private UnidadesService: UnidadesService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      fuelType: [''],
      units: [''],
      symbol: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.unidades = await this.UnidadesService.getGastosTaller();
  }
}

