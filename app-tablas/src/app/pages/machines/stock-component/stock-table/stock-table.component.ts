import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { StockService } from '../../../../service/stock.service';

import { Stock } from '../../../../Interfaces/stock.interface';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-stock-table',
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
    // FormlyModule.configure({
    //   validationMessages: [
    //     { name: 'required', message: 'This field is required' },
    //   ],
    // }),
    FormlyModule,
    FormlyPrimeNGModule,
  ],
  templateUrl: './stock-table.component.html',
  styleUrl: './stock-table.component.css',
})
export class StockTableComponent implements OnInit {
  stock: Stock[] | undefined;
  searchForm: FormGroup;


  form = new FormGroup({});
  model = { email: '' };
  fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'input',
    // templateOptions: {
    //   type: 'email',
    //   label: 'Email Address',
    //   placeholder: 'Enter email',
    //   required: true,
    // }
  }];
  constructor(private StockService: StockService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      nombreCentro: [''],
      nombreReferenciaMaterial: [''],
      descripcionRefMaterial: [''],
      cantidad: [''],
      importe: [''],
      divisa: [''],
    });
  }

  ngOnInit() {
    this.actualizarTabla();
  }

  async actualizarTabla() {
    this.stock = await this.StockService.getStock();
  }

  submit() {
    if (this.form.valid) {
      console.log(this.model);
    }
  }

  caca(dt:any) {
    console.log(dt)
    console.log(dt.exportCSV())
  }
}
