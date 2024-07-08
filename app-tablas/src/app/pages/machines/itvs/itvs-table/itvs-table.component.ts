import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InspeccionesTecnicaDto } from '@valoriza/web-commons';
import { ItvsService } from '../itvs.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'app-itvs-table',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  templateUrl: './itvs-table.component.html',
  styleUrl: './itvs-table.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class ItvsTableComponent implements OnInit {
  itvs: InspeccionesTecnicaDto[] = [];
  searchForm: FormGroup;

  constructor(
    private ItvsService: ItvsService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.searchForm = this.fb.group({
      machinery: [''],
      centre: [''],
      delegation: [''],
      family: [''],
      subfamily: [''],
      nextDate: [''],
      comments: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.itvs = await this.ItvsService.getItvs();
  }

  async confirm_edit(itvs: InspeccionesTecnicaDto) {
    try {
      this.edit(itvs);

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

  async edit(itvs: InspeccionesTecnicaDto) {
    // TODO: PETICIÓN A BACKEND PARA EDITAR
    console.error('Edit object:', itvs);
  }

  async delete(itvs: InspeccionesTecnicaDto) {
    // TODO: PETICIÓN BACKEND PARA ELIMINAR
    console.error('Delete object,', itvs);
  }

  async confirm_delete(itvs: InspeccionesTecnicaDto) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de Itvs',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',

      accept: async () => {
        try {
          await this.delete(itvs);
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
