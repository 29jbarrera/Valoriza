import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TableModule } from 'primeng/table';

import { HorometrosKilometrosService } from '../horometros-kilometros.service';
import { HorometrosKilometros } from '../type';

import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-horometros-kilometros-table',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, ConfirmDialogModule],
  templateUrl: './horometros-kilometros-table.component.html',
  styleUrl: './horometros-kilometros-table.component.scss',
  providers:[ConfirmationService]
})
export class HorometrosKilometrosTableComponent implements OnInit {
  horometrosKilometros: HorometrosKilometros[] = [];
  searchForm: FormGroup;

  constructor(
    private HorometrosKilometrosService: HorometrosKilometrosService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      machineCenter: [''],
      subFamily: [''],
      machinery: [''],
      brand: [],
      model: [''],
      finalHorometer: [''],
      finalKM: [''],
      date: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.horometrosKilometros =
      await this.HorometrosKilometrosService.getHorometrosKilometros();
  }

   // TODO: EDITAR OBJETO BACKEND
   async edit(horometrosKilometros: HorometrosKilometros) {
    console.error('Edit object:', horometrosKilometros);
  }

  // TODO: ELIMINAR OBJETO BACKEND
  async delete(horometrosKilometros: HorometrosKilometros){
    console.error('Delete object,', horometrosKilometros);
  }

  async confirm_delete(horometrosKilometros: HorometrosKilometros) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de Horómetros',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.delete(horometrosKilometros);
      },
    });
  }
}
