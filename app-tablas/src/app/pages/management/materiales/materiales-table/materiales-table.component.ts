import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Materiales } from '../../../../Interfaces/materiales.interface';
import { MaterialesService } from '../../../../service/materiales.service';

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
  selector: 'app-materiales-table',
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
  templateUrl: './materiales-table.component.html',
  styleUrl: './materiales-table.component.css',
})
export class MaterialesTableComponent implements OnInit {
  materiales: Materiales[] | undefined;
  searchForm: FormGroup;

  constructor(
    private MaterialesService: MaterialesService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      reference: [''],
      description: [''],
      category: [''],
    });
  }
  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.materiales = await this.MaterialesService.getMateriales();
  }
}

