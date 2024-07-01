import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RatiosCentro } from '../type';
import { RatiosCentroService } from '../ratios-centro.service';

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
  selector: 'app-ratios-centro-table',
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
  templateUrl: './ratios-centro-table.component.html',
  styleUrl: './ratios-centro-table.component.scss',
  providers: [ConfirmationService],
})
export class RatiosCentroTableComponent implements OnInit {
  ratiosCentro: RatiosCentro[] = [];
  searchForm: FormGroup;

  constructor(
    private RatiosCentroService: RatiosCentroService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService
  ) {
    this.searchForm = this.fb.group({
      dateFrom: [''],
      dateUntil: [''],
      centre: [''],
      repairs: [''],
      insurance: [''],
      tax: [''],
      Amortization: [''],
      financial: [''],
      rate: [''],
      ratio: [''],
      currency: [''],
    });
  }

  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.ratiosCentro = await this.RatiosCentroService.getRatios();
  }

    // TODO: EDITAR OBJETO BACKEND
    async edit(ratiosCentro: RatiosCentro) {
      console.error('Edit object:', ratiosCentro);
    }
  
    // TODO: ELIMINAR OBJETO BACKEND
    async delete(ratiosCentro: RatiosCentro){
      console.error('Delete object,', ratiosCentro);
    }
  
    async confirm_delete(ratiosCentro: RatiosCentro) {
      this._confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar esta fila?',
        header: 'Eliminar fila de ratios centro',
        icon: 'pi pi-times-circle',
        rejectButtonStyleClass: 'p-button-text',
        acceptButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.delete(ratiosCentro);
        },
      });
    }
}
