import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CambioCentro } from '../type';
import { CambioCentroService } from '../cambio-centro.service';

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
  selector: 'app-cambio-centro-table',
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
  templateUrl: './cambio-centro-table.component.html',
  styleUrl: './cambio-centro-table.component.scss',
  providers:[ConfirmationService]
})
export class CambioCentroTableComponent implements OnInit {
  cambioCentro: CambioCentro[] = [];
  selectCambioCentro: CambioCentro[] = [];
  searchForm: FormGroup;

  constructor(
    private CambioCentroService: CambioCentroService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      selected: [''],
      machineryTuition: [''],
      centerCode: [''],
      centerName: [],
      destinationCenterCode: [''],
      divisdestinationCenterNamea: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.cambioCentro = await this.CambioCentroService.getCambioCentro();
  }

    // TODO: EDITAR OBJETO BACKEND
    async edit(cambioCentro: CambioCentro) {
      console.error('Edit object:', cambioCentro);
    }
  
    // TODO: ELIMINAR OBJETO BACKEND
    async delete(cambioCentro: CambioCentro){
      console.error('Delete object,', cambioCentro);
    }
  
    async confirm_delete(cambioCentro: CambioCentro) {
      this._confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar esta fila?',
        header: 'Eliminar fila de cambios centros',
        icon: 'pi pi-times-circle',
        rejectButtonStyleClass: 'p-button-text',
        acceptButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.delete(cambioCentro);
        },
      });
    }
}

