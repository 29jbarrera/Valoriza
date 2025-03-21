import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ReparacionesCentroService } from '../reparaciones-centro.service';
import { ReparacionesDocDto } from '@valoriza/web-commons';

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
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

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
    ToastModule,
  ],
  templateUrl: './reparaciones-centro-table.component.html',
  styleUrl: './reparaciones-centro-table.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class ReparacionesCentroTableComponent implements OnInit {
  reparacionesCentro: ReparacionesDocDto[] = [];
  searchForm: FormGroup;

  constructor(
    private ReparacionesCentroService: ReparacionesCentroService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
    private messageService: MessageService
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

  async confirm_edit(reparacionesCentro: ReparacionesDocDto) {
    try {
      this.edit(reparacionesCentro);

      this.messageService.add({
        severity: 'success',
        summary: 'Actualizado',
        detail: 'Fila actualizada correctamente',
        life: 3000,
      });
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Algo inesperado ocurrió',
        life: 3000,
      });
    }
  }

  async edit(reparacionesCentro: ReparacionesDocDto) {
    // TODO: PETICIÓN A BACKEND PARA EDITAR
    console.error('Edit object:', reparacionesCentro);
  }

  async delete(reparacionesCentro: ReparacionesDocDto) {
    try {
      await this.ReparacionesCentroService.deleteReparacionesCentro(
        String(reparacionesCentro.id!)
      );
      this.messageService.add({
        severity: 'success',
        summary: 'Confirmado',
        detail: 'Fila eliminada correctamente',
        life: 3000,
      });
      this.reparacionesCentro = this.reparacionesCentro.filter(
        (o) => o.id !== reparacionesCentro.id
      );
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Algo inesperado ocurrió',
        life: 3000,
      });
    }
  }

  async confirm_delete(reparacionesCentro: ReparacionesDocDto) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de reparaciones centro',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',

      accept: async () => {
        this.delete(reparacionesCentro);
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Cancelado',
          detail: 'La acción fue cancelada',
          life: 3000,
        });
      },
    });
  }
}
