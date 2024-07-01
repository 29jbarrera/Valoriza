import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GastosTaller } from '../type';

import { GastosService } from '../gastos.service';

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
  selector: 'app-gastos-table',
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
  templateUrl: './gastos-table.component.html',
  styleUrl: './gastos-table.component.scss',
  providers:[ConfirmationService]
})
export class GastosTableComponent implements OnInit {
  gastosTaller: GastosTaller[] = [];
  searchForm: FormGroup;

  constructor(
    private GastosService: GastosService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      centerProvider: [''],
      delegation: [''],
      date: [''],
      provider: [],
      amount: [''],
      currency: [''],
      materialReference: [''],
      descriptionRefMaterial: [''],
      quantity: [''],
      switchableCost: [''],
      description: [''],
      deliveryNote: [''],
      file: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.gastosTaller = await this.GastosService.getGastos();
  }

   // TODO: EDITAR OBJETO BACKEND
   async edit(gastosTaller: GastosTaller) {
    console.error('Edit object:', gastosTaller);
  }

  // TODO: ELIMINAR OBJETO BACKEND
  async delete(gastosTaller: GastosTaller){
    console.error('Delete object,', gastosTaller);
  }

  async confirm_delete(gastosTaller: GastosTaller) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de gastos',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.delete(gastosTaller);
      },
    });
  }
}
