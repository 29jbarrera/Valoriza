import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NivelesAccion } from '../type';
import { NivelesAccionService } from '../niveles-accion.service';

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
  selector: 'app-niveles-accion-table',
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
  templateUrl: './niveles-accion-table.component.html',
  styleUrl: './niveles-accion-table.component.scss',
  providers:[ConfirmationService]
})
export class NivelesAccionTableComponent implements OnInit {
  nivelesAccion: NivelesAccion[] = [];
  searchForm: FormGroup;

  constructor(
    private NivelesAccionService: NivelesAccionService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      action: [''],
      group: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.nivelesAccion = await this.NivelesAccionService.getNivelesAccion();
  }

    // TODO: EDITAR OBJETO BACKEND
    async edit(nivelesAccion: NivelesAccion) {
      console.error('Edit object:', nivelesAccion);
    }
  
    // TODO: ELIMINAR OBJETO BACKEND
    async delete(nivelesAccion: NivelesAccion){
      console.error('Delete object,', nivelesAccion);
    }
  
    async confirm_delete(nivelesAccion: NivelesAccion) {
      this._confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar esta fila?',
        header: 'Eliminar fila de Niveles de acción',
        icon: 'pi pi-times-circle',
        rejectButtonStyleClass: 'p-button-text',
        acceptButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.delete(nivelesAccion);
        },
      });
    }
}
