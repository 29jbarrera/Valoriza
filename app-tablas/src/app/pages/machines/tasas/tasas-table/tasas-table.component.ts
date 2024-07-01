import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TasasService } from '../tasas.service';
import { Tasas } from '../type';

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
  selector: 'app-tasas-table',
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
  templateUrl: './tasas-table.component.html',
  styleUrl: './tasas-table.component.scss',
  providers: [ConfirmationService],
})
export class TasasTableComponent implements OnInit {
  tasas: Tasas[] = [];
  searchForm: FormGroup;

  constructor(
    private TasasService: TasasService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService
  ) {
    this.searchForm = this.fb.group({
      dateFrom: [''],
      dateUntil: [''],
      machineCentre: [''],
      subFamily: [''],
      tuition: [''],
      frame: [''],
      totalRate: [''],
      chassisRate: [''],
      currency: [''],
      implement1: [''],
      rate1: [''],
      currency1: [''],
      implement2: [''],
      rate2: [''],
      currency2: [''],
    });
  }

  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.tasas = await this.TasasService.getTasas();
  }

   // TODO: EDITAR OBJETO BACKEND
   async edit(tasas: Tasas) {
    console.error('Edit object:', tasas);
  }

  // TODO: ELIMINAR OBJETO BACKEND
  async delete(tasas: Tasas){
    console.error('Delete object,', tasas);
  }

  async confirm_delete(tasas: Tasas) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de tasas',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.delete(tasas);
      },
    });
  }
}
