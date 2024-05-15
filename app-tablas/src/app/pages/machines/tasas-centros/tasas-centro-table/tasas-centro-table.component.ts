import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TasasCentro } from '../../../../Interfaces/tasas-centro.interface';
import { TasasCentroService } from '../../../../service/tasas-centro.service';

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
  selector: 'app-tasas-centro-table',
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
  templateUrl: './tasas-centro-table.component.html',
  styleUrl: './tasas-centro-table.component.css',
})
export class TasasCentroTableComponent implements OnInit {
  tasasCentro: TasasCentro[] = [];
  searchForm: FormGroup;

  constructor(
    private TasasCentroService: TasasCentroService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      dateForm: [''],
      dateUntil: [''],
      delegation: [''],
      code: [''],
      name: [''],
      cost: [''],
      tasaTotal: [''],
      currency: [''],
    });
  }

  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.tasasCentro = await this.TasasCentroService.getTasasCentro();
  }
}
