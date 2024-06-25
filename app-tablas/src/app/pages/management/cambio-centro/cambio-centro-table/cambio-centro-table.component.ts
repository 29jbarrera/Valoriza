import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CambioCentro } from '../type';
import { CambioCentroService } from '../cambio-centro.service';

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
  selector: 'app-cambio-centro-table',
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
  templateUrl: './cambio-centro-table.component.html',
  styleUrl: './cambio-centro-table.component.scss',
})
export class CambioCentroTableComponent implements OnInit {
  cambioCentro: CambioCentro[] = [];
  selectCambioCentro: CambioCentro[] = [];
  searchForm: FormGroup;

  constructor(
    private CambioCentroService: CambioCentroService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      selected: [''],
      machineryTuition: [''],
      centerCode: [''],
      centerName: [],
      destinationCenterCode: [''],
      divisdestinationCenterNamea: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.cambioCentro = await this.CambioCentroService.getCambioCentro();
  }
}

