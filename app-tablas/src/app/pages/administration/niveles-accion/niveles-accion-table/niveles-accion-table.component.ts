import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NivelesMantenimientoAccioneDto } from '@valoriza/web-commons';
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
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

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
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './niveles-accion-table.component.html',
  styleUrl: './niveles-accion-table.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class NivelesAccionTableComponent implements OnInit {
  nivelesAccion: NivelesMantenimientoAccioneDto[] = [];
  searchForm: FormGroup;

  constructor(
    private NivelesAccionService: NivelesAccionService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
    private messageService: MessageService
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

  async confirm_edit(nivelesAccion: NivelesMantenimientoAccioneDto) {
    try {
      this.edit(nivelesAccion);

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

  async edit(nivelesAccion: NivelesMantenimientoAccioneDto) {
    // TODO: PETICIÓN A BACKEND PARA EDITAR
    console.error('Edit object:', nivelesAccion);
  }

  async delete(nivelesAccion: NivelesMantenimientoAccioneDto) {
    // TODO: PETICIÓN BACKEND PARA ELIMINAR
    console.error('Delete object,', nivelesAccion);
  }

  async confirm_delete(nivelesAccion: NivelesMantenimientoAccioneDto) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de Niveles de acción',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',

      accept: async () => {
        try {
          await this.delete(nivelesAccion);
          this.messageService.add({
            severity: 'success',
            summary: 'Confirmado',
            detail: 'Fila eliminada correctamente',
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
