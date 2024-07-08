import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TasasService } from '../tasas.service';
import { TasasHistoricoDto } from '@valoriza/web-commons';

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
  selector: 'app-tasas-table',
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
  templateUrl: './tasas-table.component.html',
  styleUrl: './tasas-table.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class TasasTableComponent implements OnInit {
  tasas: TasasHistoricoDto[] = [];
  searchForm: FormGroup;

  constructor(
    private TasasService: TasasService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.searchForm = this.fb.group({
      dateFrom: [''],
      dateUntil: [''],
      machineCentre: [''],
      subFamily: [''],
      tuition: [''],
      frame: [''],
      totalRate: [''],
      chassisRate: [''],
      currency: [''],
      implement1: [''],
      rate1: [''],
      currency1: [''],
      implement2: [''],
      rate2: [''],
      currency2: [''],
    });
  }

  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.tasas = await this.TasasService.getTasas();
  }

  async confirm_edit(tasas: TasasHistoricoDto) {
    try {
      this.edit(tasas);

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

  async edit(tasas: TasasHistoricoDto) {
    // TODO: PETICIÓN A BACKEND PARA EDITAR
    console.error('Edit object:', tasas);
  }

  async delete(tasas: TasasHistoricoDto) {
    // TODO: PETICIÓN BACKEND PARA ELIMINAR
    console.error('Delete object,', tasas);
  }

  async confirm_delete(tasas: TasasHistoricoDto) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de tasas',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',

      accept: async () => {
        try {
          await this.delete(tasas);
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
