import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Depositos } from '../type';
import { DepositosService } from '../depositos.service';

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
  selector: 'app-depositos-table',
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
  templateUrl: './depositos-table.component.html',
  styleUrl: './depositos-table.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class DepositosTableComponent implements OnInit {
  depositos: Depositos[] = [];
  selectDepositos: Depositos[] = [];
  searchForm: FormGroup;

  constructor(
    private DepositosService: DepositosService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.searchForm = this.fb.group({
      center: [''],
      description: [''],
      capacity: [''],
      common: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.depositos = await this.DepositosService.getDepositos();
  }

  async confirm_edit(depositos: Depositos) {
    try {
      this.edit(depositos);

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

  async edit(depositos: Depositos) {
    // TODO: PETICIÓN A BACKEND PARA EDITAR
    console.error('Edit object:', depositos);
  }

  async delete(depositos: Depositos) {
    // TODO: PETICIÓN BACKEND PARA ELIMINAR
    console.error('Delete object,', depositos);
  }

  async confirm_delete(depositos: Depositos) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de depósitos',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',

      accept: async () => {
        try {
          await this.delete(depositos);
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
