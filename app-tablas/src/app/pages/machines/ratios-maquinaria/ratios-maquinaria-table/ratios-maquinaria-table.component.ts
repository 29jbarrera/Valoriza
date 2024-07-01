import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RatiosMaquinaria } from '../type';
import { RatiosMaquinariaService } from '../ratios-maquinaria.service';

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
  selector: 'app-ratios-maquinaria-table',
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
  templateUrl: './ratios-maquinaria-table.component.html',
  styleUrl: './ratios-maquinaria-table.component.scss',
  providers: [ConfirmationService],
})
export class RatiosMaquinariaTableComponent implements OnInit {
  ratiosMaquinaria: RatiosMaquinaria[] = [];
  searchForm: FormGroup;

  constructor(
    private RatiosMaquinariaService: RatiosMaquinariaService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService
  ) {
    this.searchForm = this.fb.group({
      dateFrom: [''],
      dateUntil: [''],
      tuition: [''],
      centre: [''],
      repairs: [''],
      insurance: [''],
      tax: [''],
      amortization: [''],
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
    this.ratiosMaquinaria =
      await this.RatiosMaquinariaService.getRatiosMaquinaria();
  }

   // TODO: EDITAR OBJETO BACKEND
   async edit(ratiosMaquinaria: RatiosMaquinaria) {
    console.error('Edit object:', ratiosMaquinaria);
  }

  // TODO: ELIMINAR OBJETO BACKEND
  async delete(ratiosMaquinaria: RatiosMaquinaria){
    console.error('Delete object,', ratiosMaquinaria);
  }

  async confirm_delete(ratiosMaquinaria: RatiosMaquinaria) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de ratios maquinaria',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.delete(ratiosMaquinaria);
      },
    });
  }
}
