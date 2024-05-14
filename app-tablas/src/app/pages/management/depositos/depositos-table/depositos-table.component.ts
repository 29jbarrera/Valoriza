import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Depositos } from '../../../../Interfaces/depositos.interface';
import { DepositosService } from '../../../../service/depositos.service';

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
  selector: 'app-depositos-table',
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
  templateUrl: './depositos-table.component.html',
  styleUrl: './depositos-table.component.css',
})
export class DepositosTableComponent implements OnInit {
  depositos: Depositos[] | undefined;
  searchForm: FormGroup;

  constructor(
    private DepositosService: DepositosService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      center: [''],
      description: [''],
      capacity: [''],
      common: [''],
    });
  }
  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.depositos = await this.DepositosService.getDepositos();
  }
}
