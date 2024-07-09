import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RepostajeDto } from '@valoriza/web-commons';
import { RepostajeVehiculosService } from '../repostaje-vehiculos.service';

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
  selector: 'app-repostaje-vehiculos-table',
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
  templateUrl: './repostaje-vehiculos-table.component.html',
  styleUrl: './repostaje-vehiculos-table.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class RepostajeVehiculosTableComponent implements OnInit {
  repostajeVehiculos: RepostajeDto[] = [];
  searchForm: FormGroup;

  constructor(
    private RepostajeVehiculosService: RepostajeVehiculosService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.searchForm = this.fb.group({
      centerMachine: [''],
      deposit: [''],
      machine: [''],
      bidon: [],
      date: [''],
      amount: [''],
      account: [''],
      card: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.repostajeVehiculos =
      await this.RepostajeVehiculosService.getRepostajeVehiculos();
  }

  async confirm_edit(repostajeVehiculos: RepostajeDto) {
    try {
      this.edit(repostajeVehiculos);

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

  async edit(repostajeVehiculos: RepostajeDto) {
    // TODO: PETICIÓN A BACKEND PARA EDITAR
    console.error('Edit object:', repostajeVehiculos);
  }

  async delete(repostajeVehiculos: RepostajeDto) {
    // TODO: PETICIÓN BACKEND PARA ELIMINAR
    console.error('Delete object,', repostajeVehiculos);
  }

  async confirm_delete(repostajeVehiculos: RepostajeDto) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de repostaje vehículos',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',

      accept: async () => {
        try {
          await this.delete(repostajeVehiculos);
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
