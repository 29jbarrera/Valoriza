import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RepostajeVehiculos } from '../../../../Interfaces/repostajes-vehiculos.interface';
import { RepostajeVehiculosService } from '../../../../service/repostaje-vehiculos.service';

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
  ],
  templateUrl: './repostaje-vehiculos-table.component.html',
  styleUrl: './repostaje-vehiculos-table.component.scss',
})
export class RepostajeVehiculosTableComponent implements OnInit {
  repostajeVehiculos: RepostajeVehiculos[] = [];
  searchForm: FormGroup;

  constructor(
    private RepostajeVehiculosService: RepostajeVehiculosService,
    private fb: FormBuilder
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
}
