import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GastosService } from '../gastos.service';

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
import { GastoTallerDto } from '@valoriza/web-commons';

@Component({
  selector: 'app-gastos-table',
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
  templateUrl: './gastos-table.component.html',
  styleUrl: './gastos-table.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class GastosTableComponent implements OnInit {
  public gastosTaller: GastoTallerDto[] = [];
  searchForm: FormGroup;

  public search_term: any = '';

  constructor(
    private GastosService: GastosService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.searchForm = this.fb.group({
      centerProvider: [''],
      delegation: [''],
      date: this.fb.group({
        from: [''],
        to: [''],
      }),
      provider: [],
      amount: [''],
      currency: [''],
      materialReference: [''],
      descriptionRefMaterial: [''],
      quantity: [''],
      switchableCost: [''],
      description: [''],
      deliveryNote: [''],
      file: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  onSearch(searchTerm: any) {
    this.search_term = searchTerm;
    // Update the table with the new search term
    this.updateTable();
  }

  async updateTable() {
    this.gastosTaller = await this.GastosService.getGastos();
  }

  async confirm_edit(gastosTaller: GastoTallerDto) {
    try {
      this.edit(gastosTaller);

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

  async edit(gastosTaller: GastoTallerDto) {
    // TODO: PETICIÓN A BACKEND PARA EDITAR
    console.error('Edit object:', gastosTaller);
  }

  async delete(gastosTaller: GastoTallerDto) {
    try {
      await this.GastosService.deleteGastos(String(gastosTaller.id!));
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

  async confirm_delete(gastosTaller: GastoTallerDto) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de gastos',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',

      accept: async () => {
        this.delete(gastosTaller);
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
