import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Globales } from '../type';
import { TablaGlobalesService } from '../tabla-globales.service';

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
  selector: 'app-tablas-globales-table',
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
  templateUrl: './tablas-globales-table.component.html',
  styleUrl: './tablas-globales-table.component.scss'
})
export class TablasGlobalesTableComponent implements OnInit {
  globales: Globales[] = [];
  searchForm: FormGroup;

  constructor(
    private TablaGlobalesService: TablaGlobalesService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      name: [''],
      codeLength: [''],
      accessType: [''],
      session: [],
      task: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.globales = await this.TablaGlobalesService.getGlobales();
  }
}

