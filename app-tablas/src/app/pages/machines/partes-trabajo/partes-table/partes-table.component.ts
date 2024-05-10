import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PartesService } from '../../../../service/partes.service';
import { Partes } from '../../../../Interfaces/parte.interface';

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
  selector: 'app-partes-table',
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
  templateUrl: './partes-table.component.html',
  styleUrl: './partes-table.component.css',
})
export class PartesTableComponent implements OnInit {
  partes: Partes[] | undefined;
  searchForm: FormGroup;

  constructor(private PartesService: PartesService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      nameCenter: [''],
      datedelegacionHasta: [''],
      matricula: [''],
      name: [''],
      date: [''],
      state: [''],
      tipeMantenimiento: [''],
    });
  }

  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.partes = await this.PartesService.getPartes();
  }
}
