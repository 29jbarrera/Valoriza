import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FamiliasSubfamilias } from '../type';
import { FamiliasSubfamiliasService } from '../familias-subfamilias.service';

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
  selector: 'app-familias-subfamilias-table',
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
  templateUrl: './familias-subfamilias-table.component.html',
  styleUrl: './familias-subfamilias-table.component.scss',
})
export class FamiliasSubfamiliasTableComponent implements OnInit {
  familiasSubfamilias: FamiliasSubfamilias[] = [];
  searchForm: FormGroup;

  constructor(
    private FamiliasSubfamiliasService: FamiliasSubfamiliasService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      description: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.familiasSubfamilias =
      await this.FamiliasSubfamiliasService.getFamiliasSubfamilias();
  }
}
