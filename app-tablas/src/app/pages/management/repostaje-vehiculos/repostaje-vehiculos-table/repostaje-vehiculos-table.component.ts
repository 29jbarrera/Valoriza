import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RepostajeVehiculos } from '../type';
import { RepostajeVehiculosService } from '../repostaje-vehiculos.service';

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
  selector: 'app-repostaje-vehiculos-table',
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
  templateUrl: './repostaje-vehiculos-table.component.html',
  styleUrl: './repostaje-vehiculos-table.component.scss',
  providers:[ConfirmationService]
})
export class RepostajeVehiculosTableComponent implements OnInit {
  repostajeVehiculos: RepostajeVehiculos[] = [];
  searchForm: FormGroup;

  constructor(
    private RepostajeVehiculosService: RepostajeVehiculosService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      centerMachine: [''],
      deposit: [''],
      machine: [''],
      bidon: [],
      date: [''],
      amount: [''],
      account: [''],
      card: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.repostajeVehiculos =
      await this.RepostajeVehiculosService.getRepostajeVehiculos();
  }

    // TODO: EDITAR OBJETO BACKEND
    async edit(repostajeVehiculos: RepostajeVehiculos) {
      console.error('Edit object:', repostajeVehiculos);
    }
  
    // TODO: ELIMINAR OBJETO BACKEND
    async delete(repostajeVehiculos: RepostajeVehiculos){
      console.error('Delete object,', repostajeVehiculos);
    }
  
    async confirm_delete(repostajeVehiculos: RepostajeVehiculos) {
      this._confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar esta fila?',
        header: 'Eliminar fila de repostaje vehículos',
        icon: 'pi pi-times-circle',
        rejectButtonStyleClass: 'p-button-text',
        acceptButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.delete(repostajeVehiculos);
        },
      });
    }
}
