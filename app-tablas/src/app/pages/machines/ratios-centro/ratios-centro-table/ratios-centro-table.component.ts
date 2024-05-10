import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RatiosCentro } from '../../../../Interfaces/ratiosCentro.interface';
import { RatiosCentroService } from '../../../../service/ratiosCentro.service';

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
  selector: 'app-ratios-centro-table',
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
  templateUrl: './ratios-centro-table.component.html',
  styleUrl: './ratios-centro-table.component.css',
})
export class RatiosCentroTableComponent implements OnInit {
  ratiosCentro: RatiosCentro[] | undefined;
  searchForm: FormGroup;

  constructor (private RatiosCentroService: RatiosCentroService, private fb: FormBuilder){
    this.searchForm = this.fb.group({
      dateDesde:[''],
      dateHasta:[''],
      centro:[''],
      repairs:[''],
      seguro:[''],
      impuesto:[''],
      amortizaciones:[''],
      financieros:[''],
      tasa:[''],
      ratio:[''],
      divisa:[''],
    });
  }

  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.ratiosCentro = await this.RatiosCentroService.getRatios();
  }
}
