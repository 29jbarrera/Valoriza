import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Proveedores } from '../../../../Interfaces/proveedores.interface';
import { ProveedoresService } from '../../../../service/proveedores.service';

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
  selector: 'app-proveedores-table',
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
  templateUrl: './proveedores-table.component.html',
  styleUrl: './proveedores-table.component.scss',
})
export class ProveedoresTableComponent implements OnInit {
  proveedores: Proveedores[] = [];
  searchForm: FormGroup;

  constructor(
    private ProveedoresService: ProveedoresService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      DocIdentification: [''],
      name: [''],
      address: [''],
      phone: [],
      comments: [''],
      SAP: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.proveedores = await this.ProveedoresService.getProveedores();
  }
}
