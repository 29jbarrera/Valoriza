import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Niveles } from '../../../../Interfaces/niveles.interface';
import { NivelesService } from '../../../../service/niveles.service';

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
  ],
  templateUrl: './niveles-table.component.html',
  styleUrl: './niveles-table.component.css',
})
export class NivelesTableComponent implements OnInit {
  niveles: Niveles[] | undefined;
  searchForm: FormGroup;

  constructor(
    private NivelesService: NivelesService,
    private fb: FormBuilder
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
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.niveles = await this.NivelesService.getNiveles();
  }
}
