import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LimiteAvisos } from '../../../../Interfaces/limite-avisos.interface';
import { LimiteAvisosService } from '../../../../service/limite-avisos.service';

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
  selector: 'app-limite-avisos-table',
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
  templateUrl: './limite-avisos-table.component.html',
  styleUrl: './limite-avisos-table.component.css',
})
export class LimiteAvisosTableComponent implements OnInit {
  limiteAvisos: LimiteAvisos[] = []
  searchForm: FormGroup;

  constructor(
    private LimiteAvisosService: LimiteAvisosService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      code: [''],
      value: [''],
      description: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.limiteAvisos = await this.LimiteAvisosService.getLimiteAvisos();
  }
}
