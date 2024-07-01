import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Gnc } from '../type';
import { GncService } from '../gnc.service';

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
  selector: 'app-gnc-table',
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
  templateUrl: './gnc-table.component.html',
  styleUrl: './gnc-table.component.scss',
  providers: [ConfirmationService],
})
export class GncTableComponent implements OnInit {
  gnc: Gnc[] = [];
  searchForm: FormGroup;
  constructor(
    private GncService: GncService,
    private fb: FormBuilder,
    private _confirmationService: ConfirmationService
  ) {
    this.searchForm = this.fb.group({
      machinery: [''],
      centerName: [''],
      delegation: [''],
      family: [],
      subFamily: [''],
      nextDate: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.gnc = await this.GncService.getGnc();
  }

    // TODO: EDITAR OBJETO BACKEND
    async edit(gnc: Gnc) {
      console.error('Edit object:', gnc);
    }
  
    // TODO: ELIMINAR OBJETO BACKEND
    async delete(gnc: Gnc){
      console.error('Delete object,', gnc);
    }
  
    async confirm_delete(gnc: Gnc) {
      this._confirmationService.confirm({
        message: '¿Estás seguro de que quieres eliminar esta fila?',
        header: 'Eliminar fila de GNC',
        icon: 'pi pi-times-circle',
        rejectButtonStyleClass: 'p-button-text',
        acceptButtonStyleClass: 'p-button-danger',
        accept: () => {
          this.delete(gnc);
        },
      });
    }
}
