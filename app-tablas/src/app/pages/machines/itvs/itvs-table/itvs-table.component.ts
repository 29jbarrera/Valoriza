import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InspeccionTecnicaDto } from '@valoriza/web-commons';
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
  itvs: InspeccionTecnicaDto[] = [];
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

  async confirm_edit(itv: InspeccionTecnicaDto) {
    try {
      this.edit(itv);

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

  async edit(itv: InspeccionTecnicaDto) {
    // TODO: PETICIÓN A BACKEND PARA EDITAR
    console.error('Edit object:', itv);
  }

  async delete(itv: InspeccionTecnicaDto) {
    try {
      await this.ItvsService.deleteItvs(itv.id!);
      this.messageService.add({
        severity: 'success',
        summary: 'Confirmado',
        detail: 'Fila eliminada correctamente',
        life: 3000,
      });
      this.itvs = this.itvs.filter((o) => o.id !== itv.id);
    } catch (error) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Algo inesperado ocurrió',
        life: 3000,
      });
    }
  }

  async confirm_delete(itv: InspeccionTecnicaDto) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de Itvs',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',

      accept: async () => {
        this.delete(itv);
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
