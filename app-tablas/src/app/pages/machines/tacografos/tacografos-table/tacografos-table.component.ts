import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TacografosService } from '../../../../service/tacografos.service';
import { Tacografo } from '../../../../Interfaces/tacografos.interface';

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
  selector: 'app-tacografos-table',
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
  templateUrl: './tacografos-table.component.html',
  styleUrl: './tacografos-table.component.css',
})
export class TacografosTableComponent implements OnInit {
  tacografos: Tacografo[] = [];
  searchForm: FormGroup;

  constructor (private TacografosService: TacografosService, private fb: FormBuilder){
    this.searchForm = this.fb.group({
      machinery:[''],
      center:[''],
      delegation:[''],
      family:[''],
      subFamily:[''],
      nextDate:[''],
    });
  }

  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.tacografos = await this.TacografosService.getTacografos();
  }
}


