import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Repostaje } from '../../../../Interfaces/repostajes.interface';
import { RepostajesService } from '../../../../service/repostajes.service';

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
export class RepostajesTableComponent implements OnInit {
  repostaje: Repostaje[] | undefined;
  searchForm: FormGroup;

  constructor(
    private RepostajesService: RepostajesService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      center: [''],
      matricula: [''],
      date: [''],
      amount: [],
      fuelType: [''],
      units: [''],
    });
  }
  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.repostaje = await this.RepostajesService.getRepostajes();
  }
}
