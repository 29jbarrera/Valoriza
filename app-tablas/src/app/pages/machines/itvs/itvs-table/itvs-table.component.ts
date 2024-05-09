import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Itvs } from '../../../../Interfaces/itvs.interface';
import { ItvsService } from '../../../../service/itvs.service';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-itvs-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './itvs-table.component.html',
  styleUrl: './itvs-table.component.css'
})
export class ItvsTableComponent implements OnInit {
  itvs: Itvs[] | undefined;
  searchForm: FormGroup;

  constructor(
    private ItvsService: ItvsService,
    private fb: FormBuilder
  ){
    this.searchForm = this.fb.group({
      maquinaria: [''],
      centro: [''],
      delegacion: [''],
      familia: [''],
      subfamilia: [''],
      comentarios: ['']
    });
  }
ngOnInit(){
  this.actualizarTabla();
}

async actualizarTabla(){
  this.itvs = await this.ItvsService.getItvs();
}
}
