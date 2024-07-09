import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GruasService } from '../gruas.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GruasDocDto } from '@valoriza/web-commons';

@Component({
  selector: 'app-gruas-table',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    ConfirmDialogModule,
    ButtonModule,
    ToastModule,
  ],
  templateUrl: './gruas-table.component.html',
  styleUrl: './gruas-table.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class GruasTableComponent implements OnInit {
  gruas: GruasDocDto[] = [];
  searchForm: FormGroup;

  constructor(
    private GruasService: GruasService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.searchForm = this.fb.group({
      machinery: [''],
      center: [''],
      delegation: [''],
      family: [''],
      subFamily: [''],
      nextDate: [''],
    });
  }

  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.gruas = await this.GruasService.getGruas();
  }

  async confirm_edit(gruas: GruasDocDto) {
    try {
      this.edit(gruas);

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

  async edit(gruas: GruasDocDto) {
    // TODO: PETICIÓN A BACKEND PARA EDITAR
    console.error('Edit object:', gruas);
  }

  async delete(gruas: GruasDocDto) {
    try {
      await this.GruasService.deleteGruas(gruas.id!);
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
  }

  async confirm_delete(gruas: GruasDocDto) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de Grúas',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',

      accept: async () => {
        this.delete(gruas)
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
