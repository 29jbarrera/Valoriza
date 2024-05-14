import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Impuestos } from '../../../../Interfaces/impuestos.interface';
import { ImpuestosService } from '../../../../service/impuestos.service';

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
  selector: 'app-impuestos-table',
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
  templateUrl: './impuestos-table.component.html',
  styleUrl: './impuestos-table.component.css',
})
export class ImpuestosTableComponent implements OnInit {
  impuestos: Impuestos[] | undefined;
  searchForm: FormGroup;

  constructor(
    private ImpuestosService: ImpuestosService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      center: [''],
      description: [''],
      matricula: [''],
      impuesto: [],
      currency: [''],
      date: [''],
    });
  }
  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.impuestos = await this.ImpuestosService.getImpuestos();
  }
}
