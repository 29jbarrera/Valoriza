import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GruasService } from '../gruas.service';
import { Gruas } from '../type';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-gruas-table',
  standalone: true,
  imports: [TableModule, CommonModule, ConfirmDialogModule, ButtonModule],
  templateUrl: './gruas-table.component.html',
  styleUrl: './gruas-table.component.scss',
  providers: [ConfirmationService],
})
export class GruasTableComponent implements OnInit {
  gruas: Gruas[] = [];
  searchForm: FormGroup;

  constructor(
    private GruasService: GruasService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService
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
    this.gruas = await this.GruasService.getGruas();
  }

    // TODO: EDITAR OBJETO BACKEND
    async edit(gruas: Gruas) {
      console.error('Edit object:', gruas);
    }
  
    // TODO: ELIMINAR OBJETO BACKEND
    async delete(gruas: Gruas){
      console.error('Delete object,', gruas);
    }
  
    async confirm_delete(gruas: Gruas) {
      this._confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar esta fila?',
        header: 'Eliminar fila de Grúas',
        icon: 'pi pi-times-circle',
        rejectButtonStyleClass: 'p-button-text',
        acceptButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.delete(gruas);
        },
      });
    }
}
