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
  styleUrl: './itvs-table.component.scss'
})
export class ItvsTableComponent implements OnInit {
  itvs: Itvs[] = [];
  searchForm: FormGroup;

  constructor(
    private ItvsService: ItvsService,
    private fb: FormBuilder
  ){
    this.searchForm = this.fb.group({
      machinery: [''],
      centre: [''],
      delegation: [''],
      family: [''],
      subfamily: [''],
      nextDate: [''],
      comments: ['']
    });
  }
ngOnInit(){
  this.updateTable();
}

async updateTable(){
  this.itvs = await this.ItvsService.getItvs();
}
}
