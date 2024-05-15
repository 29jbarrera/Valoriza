import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RepostajeMaquinaria } from '../../../../Interfaces/repostajes-maquinaria.interface';
import { RepostajesService } from '../../../../service/repostajes-maquinaria.service';

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
  ],
  templateUrl: './repostajes-table.component.html',
  styleUrl: './repostajes-table.component.css',
})
export class RepostajesMaquinariaTableComponent implements OnInit {
  repostaje: RepostajeMaquinaria[] = [];
  searchForm: FormGroup;

  constructor(
    private RepostajesService: RepostajesService,
    private fb: FormBuilder
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
}
