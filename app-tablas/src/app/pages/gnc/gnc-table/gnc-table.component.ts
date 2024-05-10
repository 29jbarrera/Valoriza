import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Gnc } from '../../../Interfaces/gnc.interface';
import { GncService } from '../../../service/gnc.service';

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
  ],
  templateUrl: './gnc-table.component.html',
  styleUrl: './gnc-table.component.css',
})
export class GncTableComponent implements OnInit {
  gnc: Gnc[] | undefined;
  searchForm: FormGroup;
  constructor(private GncService: GncService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      maquinaria: [''],
      nombrecentro: [''],
      delegacion: [''],
      familia: [],
      subfamilia: [''],
      fechaproxima: [''],
    });
  }
  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.gnc = await this.GncService.getGnc();
  }
}
