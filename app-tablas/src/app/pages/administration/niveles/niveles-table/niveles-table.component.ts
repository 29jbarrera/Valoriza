import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Niveles } from '../type';
import { NivelesService } from '../niveles.service';

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
  selector: 'app-niveles-table',
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
  templateUrl: './niveles-table.component.html',
  styleUrl: './niveles-table.component.scss',
  providers:[ConfirmationService]
})
export class NivelesTableComponent implements OnInit {
  niveles: Niveles[] = [];
  searchForm: FormGroup;

  constructor(
    private NivelesService: NivelesService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      code: [''],
      frequency: [''],
      type: [''],
      average: [],
      periodic: [''],
      startDate: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.niveles = await this.NivelesService.getNiveles();
  }

    // TODO: EDITAR OBJETO BACKEND
    async edit(niveles: Niveles) {
      console.error('Edit object:', niveles);
    }
  
    // TODO: ELIMINAR OBJETO BACKEND
    async delete(niveles: Niveles){
      console.error('Delete object,', niveles);
    }
  
    async confirm_delete(niveles: Niveles) {
      this._confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar esta fila?',
        header: 'Eliminar fila de Niveles',
        icon: 'pi pi-times-circle',
        rejectButtonStyleClass: 'p-button-text',
        acceptButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.delete(niveles);
        },
      });
    }
}
