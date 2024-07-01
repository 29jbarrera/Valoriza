import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RepostajeMaquinaria } from '../type';
import { RepostajesService } from '../repostajes-maquinaria.service';

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
  selector: 'app-repostajes-table',
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
  templateUrl: './repostajes-table.component.html',
  styleUrl: './repostajes-table.component.scss',
  providers:[ConfirmationService]
})
export class RepostajesMaquinariaTableComponent implements OnInit {
  repostaje: RepostajeMaquinaria[] = [];
  searchForm: FormGroup;

  constructor(
    private RepostajesService: RepostajesService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService,
  ) {
    this.searchForm = this.fb.group({
      center: [''],
      tuition: [''],
      date: [''],
      amount: [],
      fuelType: [''],
      units: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.repostaje = await this.RepostajesService.getRepostajes();
  }

    // TODO: EDITAR OBJETO BACKEND
    async edit(repostaje: RepostajeMaquinaria) {
      console.error('Edit object:', repostaje);
    }
  
    // TODO: ELIMINAR OBJETO BACKEND
    async delete(repostaje: RepostajeMaquinaria){
      console.error('Delete object,', repostaje);
    }
  
    async confirm_delete(repostaje: RepostajeMaquinaria) {
      this._confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar esta fila?',
        header: 'Eliminar fila de repostajes maquinaria',
        icon: 'pi pi-times-circle',
        rejectButtonStyleClass: 'p-button-text',
        acceptButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.delete(repostaje);
        },
      });
    }
}
