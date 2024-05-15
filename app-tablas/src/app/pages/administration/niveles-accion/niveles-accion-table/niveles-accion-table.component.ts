import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NivelesAccion } from '../../../../Interfaces/niveles-accion.interface';
import { NivelesAccionService } from '../../../../service/niveles-accion.service';

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
  selector: 'app-niveles-accion-table',
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
  templateUrl: './niveles-accion-table.component.html',
  styleUrl: './niveles-accion-table.component.css',
})
export class NivelesAccionTableComponent implements OnInit {
  nivelesAccion: NivelesAccion[] | undefined;
  searchForm: FormGroup;

  constructor(
    private NivelesAccionService: NivelesAccionService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      action: [''],
      group: [''],
    });
  }
  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.nivelesAccion = await this.NivelesAccionService.getNivelesAccion();
  }
}
