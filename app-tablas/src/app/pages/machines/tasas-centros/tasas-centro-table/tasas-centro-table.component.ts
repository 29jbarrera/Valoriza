import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TasasCentro } from '../type';
import { TasasCentroService } from '../tasas-centro.service';

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
  selector: 'app-tasas-centro-table',
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
  templateUrl: './tasas-centro-table.component.html',
  styleUrl: './tasas-centro-table.component.scss',
  providers:[ConfirmationService]
})
export class TasasCentroTableComponent implements OnInit {
  tasasCentro: TasasCentro[] = [];
  searchForm: FormGroup;

  constructor(
    private TasasCentroService: TasasCentroService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      dateForm: [''],
      dateUntil: [''],
      delegation: [''],
      code: [''],
      name: [''],
      cost: [''],
      tasaTotal: [''],
      currency: [''],
    });
  }

  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.tasasCentro = await this.TasasCentroService.getTasasCentro();
  }

    // TODO: EDITAR OBJETO BACKEND
    async edit(tasasCentro: TasasCentro) {
      console.error('Edit object:', tasasCentro);
    }
  
    // TODO: ELIMINAR OBJETO BACKEND
    async delete(tasasCentro: TasasCentro){
      console.error('Delete object,', tasasCentro);
    }
  
    async confirm_delete(tasasCentro: TasasCentro) {
      this._confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar esta fila?',
        header: 'Eliminar fila de tasas centro',
        icon: 'pi pi-times-circle',
        rejectButtonStyleClass: 'p-button-text',
        acceptButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.delete(tasasCentro);
        },
      });
    }
}
