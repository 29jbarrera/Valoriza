import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TableModule } from 'primeng/table';

import { HorometrosKilometrosService } from '../horometros-kilometros.service';
import { HorometrosKilometros } from '../type';

import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-horometros-kilometros-table',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  templateUrl: './horometros-kilometros-table.component.html',
  styleUrl: './horometros-kilometros-table.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class HorometrosKilometrosTableComponent implements OnInit {
  horometrosKilometros: HorometrosKilometros[] = [];
  searchForm: FormGroup;

  constructor(
    private HorometrosKilometrosService: HorometrosKilometrosService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.searchForm = this.fb.group({
      machineCenter: [''],
      subFamily: [''],
      machinery: [''],
      brand: [],
      model: [''],
      finalHorometer: [''],
      finalKM: [''],
      date: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.horometrosKilometros =
      await this.HorometrosKilometrosService.getHorometrosKilometros();
  }

  async confirm_edit(horometrosKilometros: HorometrosKilometros) {
    try {
      this.edit(horometrosKilometros);

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

  async edit(horometrosKilometros: HorometrosKilometros) {
    // TODO: PETICIÓN A BACKEND PARA EDITAR
    console.error('Edit object:', horometrosKilometros);
  }

  async delete(horometrosKilometros: HorometrosKilometros) {
    // TODO: PETICIÓN BACKEND PARA ELIMINAR
    console.error('Delete object,', horometrosKilometros);
  }

  async confirm_delete(horometrosKilometros: HorometrosKilometros) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de Horómetros',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',

      accept: async () => {
        try {
          await this.delete(horometrosKilometros);
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
