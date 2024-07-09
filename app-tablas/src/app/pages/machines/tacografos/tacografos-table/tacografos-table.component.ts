import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TacografosService } from '../tacografos.service';
import { TacografoDto } from '@valoriza/web-commons';

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
  selector: 'app-tacografos-table',
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
  templateUrl: './tacografos-table.component.html',
  styleUrl: './tacografos-table.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class TacografosTableComponent implements OnInit {
  tacografos: TacografoDto[] = [];
  searchForm: FormGroup;

  constructor(
    private TacografosService: TacografosService,
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
    this.tacografos = await this.TacografosService.getTacografos();
  }

  async confirm_edit(tacografos: TacografoDto) {
    try {
      this.edit(tacografos);

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

  async edit(tacografos: TacografoDto) {
    // TODO: PETICIÓN A BACKEND PARA EDITAR
    console.error('Edit object:', tacografos);
  }

  async delete(tacografos: TacografoDto) {
    try {
      await this.TacografosService.deleteTacografos(tacografos.id!);
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

  async confirm_delete(tacografos: TacografoDto) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de tacógrafos',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',

      accept: async () => {
        this.delete(tacografos);
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
