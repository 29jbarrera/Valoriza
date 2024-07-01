import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Itvs } from '../type';
import { ItvsService } from '../itvs.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-itvs-table',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, ConfirmDialogModule],
  templateUrl: './itvs-table.component.html',
  styleUrl: './itvs-table.component.scss',
  providers:[ConfirmationService]
})
export class ItvsTableComponent implements OnInit {
  itvs: Itvs[] = [];
  searchForm: FormGroup;

  constructor(
    private ItvsService: ItvsService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ){
    this.searchForm = this.fb.group({
      machinery: [''],
      centre: [''],
      delegation: [''],
      family: [''],
      subfamily: [''],
      nextDate: [''],
      comments: ['']
    });
  }
ngOnInit(){
  this.updateTable();
}

async updateTable(){
  this.itvs = await this.ItvsService.getItvs();
}

  // TODO: EDITAR OBJETO BACKEND
  async edit(itvs: Itvs) {
    console.error('Edit object:', itvs);
  }

  // TODO: ELIMINAR OBJETO BACKEND
  async delete(itvs: Itvs){
    console.error('Delete object,', itvs);
  }

  async confirm_delete(itvs: Itvs) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de Familias y Subfamilias',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.delete(itvs);
      },
    });
  }
}
