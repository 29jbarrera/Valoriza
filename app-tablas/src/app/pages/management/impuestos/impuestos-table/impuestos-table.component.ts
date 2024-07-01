import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Impuestos } from '../type';
import { ImpuestosService } from '../impuestos.service';

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
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-impuestos-table',
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
  ],
  templateUrl: './impuestos-table.component.html',
  styleUrl: './impuestos-table.component.scss',
  providers:[ConfirmationService]
})
export class ImpuestosTableComponent implements OnInit {
  impuestos: Impuestos[] = [];
  searchForm: FormGroup;

  constructor(
    private ImpuestosService: ImpuestosService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      center: [''],
      address: [''],
      tuition: [''],
      tax: [''],
      currency: [''],
      date: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.impuestos = await this.ImpuestosService.getImpuestos();
  }

    // TODO: EDITAR OBJETO BACKEND
    async edit(impuestos: Impuestos) {
      console.error('Edit object:', impuestos);
    }
  
    // TODO: ELIMINAR OBJETO BACKEND
    async delete(impuestos: Impuestos){
      console.error('Delete object,', impuestos);
    }
  
    async confirm_delete(impuestos: Impuestos) {
      this._confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar esta fila?',
        header: 'Eliminar fila de impuestos',
        icon: 'pi pi-times-circle',
        rejectButtonStyleClass: 'p-button-text',
        acceptButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.delete(impuestos);
        },
      });
    }
}
