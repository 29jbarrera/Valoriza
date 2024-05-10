import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RatiosMaquinaria } from '../../../../Interfaces/ratiosMaquinaria.interface';
import { RatiosMaquinariaService } from '../../../../service/ratios-maquinaria.service';

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
  selector: 'app-ratios-maquinaria-table',
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
  templateUrl: './ratios-maquinaria-table.component.html',
  styleUrl: './ratios-maquinaria-table.component.css',
})
export class RatiosMaquinariaTableComponent implements OnInit {
  ratiosMaquinaria: RatiosMaquinaria[] | undefined;
  searchForm: FormGroup;

  constructor (private RatiosMaquinariaService: RatiosMaquinariaService, private fb: FormBuilder){
    this.searchForm = this.fb.group({
      dateDesde:[''],
      dateHasta:[''],
      matricula:[''],
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
    this.ratiosMaquinaria = await this.RatiosMaquinariaService.getRatiosMaquinaria();
  }
}

