import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LimiteAvisos } from '../type';
import { LimiteAvisosService } from '../limite-avisos.service';

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
  selector: 'app-limite-avisos-table',
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
  templateUrl: './limite-avisos-table.component.html',
  styleUrl: './limite-avisos-table.component.scss',
  providers:[ConfirmationService]
})
export class LimiteAvisosTableComponent implements OnInit {
  limiteAvisos: LimiteAvisos[] = []
  searchForm: FormGroup;

  constructor(
    private LimiteAvisosService: LimiteAvisosService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      code: [''],
      value: [''],
      description: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.limiteAvisos = await this.LimiteAvisosService.getLimiteAvisos();
  }

  // TODO: EDITAR OBJETO BACKEND
  async edit(limiteAvisos: LimiteAvisos) {
    console.error('Edit object:', limiteAvisos);
  }

  // TODO: ELIMINAR OBJETO BACKEND
  async delete(limiteAvisos: LimiteAvisos){
    console.error('Delete object,', limiteAvisos);
  }

  async confirm_delete(limiteAvisos: LimiteAvisos) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de Límite avisos',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.delete(limiteAvisos);
      },
    });
  }
}
