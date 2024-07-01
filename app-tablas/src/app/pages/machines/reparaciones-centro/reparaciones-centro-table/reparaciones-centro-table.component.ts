import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ReparacionesCentroService } from '../reparaciones-centro.service';
import { ReparacionesCentro } from '../type';

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
  selector: 'app-reparaciones-centro-table',
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
    ConfirmDialogModule,
  ],
  templateUrl: './reparaciones-centro-table.component.html',
  styleUrl: './reparaciones-centro-table.component.scss',
  providers: [ConfirmationService],
})
export class ReparacionesCentroTableComponent implements OnInit {
  reparacionesCentro: ReparacionesCentro[] = [];
  searchForm: FormGroup;

  constructor(
    private ReparacionesCentroService: ReparacionesCentroService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService
  ) {
    this.searchForm = this.fb.group({
      code: [''],
      name: [''],
      delagation: [''],
      cost: [''],
    });
  }

  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.reparacionesCentro =
      await this.ReparacionesCentroService.getReparacionesCentro();
  }

   // TODO: EDITAR OBJETO BACKEND
   async edit(reparacionesCentro: ReparacionesCentro) {
    console.error('Edit object:', reparacionesCentro);
  }

  // TODO: ELIMINAR OBJETO BACKEND
  async delete(reparacionesCentro: ReparacionesCentro){
    console.error('Delete object,', reparacionesCentro);
  }

  async confirm_delete(reparacionesCentro: ReparacionesCentro) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de reparaciones centro',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.delete(reparacionesCentro);
      },
    });
  }
}
