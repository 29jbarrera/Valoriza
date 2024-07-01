import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FamiliasSubfamilias } from '../type';
import { FamiliasSubfamiliasService } from '../familias-subfamilias.service';

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
  selector: 'app-familias-subfamilias-table',
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
    ConfirmDialogModule
  ],
  templateUrl: './familias-subfamilias-table.component.html',
  styleUrl: './familias-subfamilias-table.component.scss',
  providers:[ConfirmationService]
})
export class FamiliasSubfamiliasTableComponent implements OnInit {
  familiasSubfamilias: FamiliasSubfamilias[] = [];
  searchForm: FormGroup;

  constructor(
    private FamiliasSubfamiliasService: FamiliasSubfamiliasService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      description: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.familiasSubfamilias =
      await this.FamiliasSubfamiliasService.getFamiliasSubfamilias();
  }

  // TODO: EDITAR OBJETO BACKEND
  async edit(familiasSubfamilias: FamiliasSubfamilias) {
    console.error('Edit object:', familiasSubfamilias);
  }

  // TODO: ELIMINAR OBJETO BACKEND
  async delete(familiasSubfamilias: FamiliasSubfamilias){
    console.error('Delete object,', familiasSubfamilias);
  }

  async confirm_delete(familiasSubfamilias: FamiliasSubfamilias) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de Familias y Subfamilias',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.delete(familiasSubfamilias);
      },
    });
  }
}
