import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Proveedores } from '../type';
import { ProveedoresService } from '../proveedores.service';

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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

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
    ConfirmDialogModule
  ],
  templateUrl: './proveedores-table.component.html',
  styleUrl: './proveedores-table.component.scss',
  providers:[ConfirmationService]
})
export class ProveedoresTableComponent implements OnInit {
  proveedores: Proveedores[] = [];
  searchForm: FormGroup;

  constructor(
    private ProveedoresService: ProveedoresService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
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

  // TODO: EDITAR OBJETO BACKEND
  async edit(proveedores: Proveedores) {
    console.error('Edit object:', proveedores);
  }

  // TODO: ELIMINAR OBJETO BACKEND
  async delete(proveedores: Proveedores){
    console.error('Delete object,', proveedores);
  }

  async confirm_delete(proveedores: Proveedores) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de proveedores',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.delete(proveedores);
      },
    });
  }
}
