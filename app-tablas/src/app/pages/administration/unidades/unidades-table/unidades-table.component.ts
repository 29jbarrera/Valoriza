import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Unidades } from '../type';
import { UnidadesService } from '../unidades.service';

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
  selector: 'app-unidades-table',
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
  templateUrl: './unidades-table.component.html',
  styleUrl: './unidades-table.component.scss',
  providers:[ConfirmationService]
})
export class UnidadesTableComponent implements OnInit {
  unidades: Unidades[] = [];
  searchForm: FormGroup;

  constructor(
    private UnidadesService: UnidadesService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      fuelType: [''],
      units: [''],
      symbol: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.unidades = await this.UnidadesService.getGastosTaller();
  }

    // TODO: EDITAR OBJETO BACKEND
    async edit(unidades: Unidades) {
      console.error('Edit object:', unidades);
    }
  
    // TODO: ELIMINAR OBJETO BACKEND
    async delete(unidades: Unidades){
      console.error('Delete object,', unidades);
    }
  
    async confirm_delete(unidades: Unidades) {
      this._confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar esta fila?',
        header: 'Eliminar fila de unidades',
        icon: 'pi pi-times-circle',
        rejectButtonStyleClass: 'p-button-text',
        acceptButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.delete(unidades);
        },
      });
    }
}

