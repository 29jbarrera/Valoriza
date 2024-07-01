import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Instalaciones } from '../type';
import { InstalacionesService } from '../instalaciones.service';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-instalaciones-table',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, ConfirmDialogModule],
  templateUrl: './instalaciones-table.component.html',
  styleUrl: './instalaciones-table.component.scss',
  providers:[ConfirmationService]
})
export class InstalacionesTableComponent implements OnInit {
  instalaciones: Instalaciones[] = [];
  searchForm: FormGroup;

  constructor(
    private InstalacionesService: InstalacionesService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      installationCentre: [''],
      name: [''],
      comments: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.instalaciones = await this.InstalacionesService.getInstalaciones();
  }

   // TODO: EDITAR OBJETO BACKEND
   async edit(instalaciones: Instalaciones) {
    console.error('Edit object:', instalaciones);
  }

  // TODO: ELIMINAR OBJETO BACKEND
  async delete(instalaciones: Instalaciones){
    console.error('Delete object,', instalaciones);
  }

  async confirm_delete(instalaciones: Instalaciones) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de instalaciones',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.delete(instalaciones);
      },
    });
  }
}
