import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PreventivoService } from '../preventivo.service';
import { Preventivo } from '../type';

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
  selector: 'app-preventivo-table',
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
  templateUrl: './preventivo-table.component.html',
  styleUrl: './preventivo-table.component.scss',
  providers:[ConfirmationService]
})
export class PreventivoTableComponent implements OnInit {
  preventivo: Preventivo[] = [];
  searchForm: FormGroup;

  constructor(
    private PreventivoService: PreventivoService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      machineCenter: [''],
      subfamily: [''],
      machinery: [''],
      level: [''],
      position: [''],
      horromMaint: [''],
      horromFinal: [''],
      kmMaint: [''],
      kmFinal: [''],
      date: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }
  async updateTable() {
    this.preventivo = await this.PreventivoService.getPreventivo();
  }

   // TODO: EDITAR OBJETO BACKEND
   async edit(preventivo: Preventivo) {
    console.error('Edit object:', preventivo);
  }

  // TODO: ELIMINAR OBJETO BACKEND
  async delete(preventivo: Preventivo){
    console.error('Delete object,', preventivo);
  }

  async confirm_delete(preventivo: Preventivo) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de mantenimiento de preventivos',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.delete(preventivo);
      },
    });
  }
}
