import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Seguros } from '../type';
import { SegurosService } from '../seguros.service';

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
  selector: 'app-seguros-table',
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
  templateUrl: './seguros-table.component.html',
  styleUrl: './seguros-table.component.scss',
  providers:[ConfirmationService]
})
export class SegurosTableComponent implements OnInit {
  seguros: Seguros[] = [];
  searchForm: FormGroup;

  constructor(
    private SegurosService: SegurosService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      center: [''],
      machines: [''],
      insuranceCompany: [''],
      state: [],
      type: [''],
      numberPoliza: [''],
      startDate: [''],
      endDate: [''],
      amount: [''],
      currency: [''],
      comment: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.seguros = await this.SegurosService.getSeguros();
    SegurosService
  }

    // TODO: EDITAR OBJETO BACKEND
    async edit(seguros: Seguros) {
      console.error('Edit object:', seguros);
    }
  
    // TODO: ELIMINAR OBJETO BACKEND
    async delete(seguros: Seguros){
      console.error('Delete object,', seguros);
    }
  
    async confirm_delete(seguros: Seguros) {
      this._confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar esta fila?',
        header: 'Eliminar fila de seguros',
        icon: 'pi pi-times-circle',
        rejectButtonStyleClass: 'p-button-text',
        acceptButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.delete(seguros);
        },
      });
    }
}
