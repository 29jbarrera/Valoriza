import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Seguros } from '../../../../Interfaces/seguros.interface';
import { SegurosService } from '../../../../service/seguros.service';

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
  selector: 'app-seguros-table',
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
  templateUrl: './seguros-table.component.html',
  styleUrl: './seguros-table.component.css',
})
export class SegurosTableComponent implements OnInit {
  seguros: Seguros[] | undefined;
  searchForm: FormGroup;

  constructor(
    private SegurosService: SegurosService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      center: [''],
      machines: [''],
      aseguradora: [''],
      state: [],
      type: [''],
      numberPoliza: [''],
      startDate: [''],
      endDate: [''],
      amount: [''],
      currency: [''],
      comment: [''],
    });
  }
  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.seguros = await this.SegurosService.getSeguros();
    SegurosService
  }
}
