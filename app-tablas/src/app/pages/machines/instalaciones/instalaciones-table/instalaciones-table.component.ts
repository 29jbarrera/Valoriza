import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Instalaciones } from '../type';
import { InstalacionesService } from '../instalaciones.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-instalaciones-table',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './instalaciones-table.component.html',
  styleUrl: './instalaciones-table.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class InstalacionesTableComponent implements OnInit {
  instalaciones: Instalaciones[] = [];
  searchForm: FormGroup;

  constructor(
    private InstalacionesService: InstalacionesService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.searchForm = this.fb.group({
      installationCentre: [''],
      name: [''],
      comments: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.instalaciones = await this.InstalacionesService.getInstalaciones();
  }

  async confirm_edit(instalaciones: Instalaciones) {
    try {
      this.edit(instalaciones);

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

  async edit(instalaciones: Instalaciones) {
    // TODO: PETICIÓN A BACKEND PARA EDITAR
    console.error('Edit object:', instalaciones);
  }

  async delete(instalaciones: Instalaciones) {
    // TODO: PETICIÓN BACKEND PARA ELIMINAR
    console.error('Delete object,', instalaciones);
  }

  async confirm_delete(instalaciones: Instalaciones) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de instalaciones',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',

      accept: async () => {
        try {
          await this.delete(instalaciones);
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
