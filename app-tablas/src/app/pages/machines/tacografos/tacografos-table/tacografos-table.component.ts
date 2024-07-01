import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TacografosService } from '../tacografos.service';
import { Tacografo } from '../type';

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
  ],
  templateUrl: './tacografos-table.component.html',
  styleUrl: './tacografos-table.component.scss',
  providers: [ConfirmationService],
})
export class TacografosTableComponent implements OnInit {
  tacografos: Tacografo[] = [];
  searchForm: FormGroup;

  constructor(
    private TacografosService: TacografosService,
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
    this.tacografos = await this.TacografosService.getTacografos();
  }

   // TODO: EDITAR OBJETO BACKEND
   async edit(tacografos: Tacografo) {
    console.error('Edit object:', tacografos);
  }

  // TODO: ELIMINAR OBJETO BACKEND
  async delete(tacografos: Tacografo){
    console.error('Delete object,', tacografos);
  }

  async confirm_delete(tacografos: Tacografo) {
    this._confirmationService.confirm({
      message: '¿Estás seguro de que quieres eliminar esta fila?',
      header: 'Eliminar fila de tacógrafos',
      icon: 'pi pi-times-circle',
      rejectButtonStyleClass: 'p-button-text',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.delete(tacografos);
      },
    });
  }
}
