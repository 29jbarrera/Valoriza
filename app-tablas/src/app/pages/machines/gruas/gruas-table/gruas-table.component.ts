import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GruasService } from '../gruas.service';
import { Gruas } from '../type';

import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-gruas-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './gruas-table.component.html',
  styleUrl: './gruas-table.component.scss',
})
export class GruasTableComponent implements OnInit {
  gruas: Gruas[] = [];
  searchForm: FormGroup;

  constructor(private GruasService: GruasService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      machinery: [''],
      center: [''],
      delegation: [''],
      family: [''],
      subFamily: [''],
      nextDate: [''],
    });
  }

  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.gruas = await this.GruasService.getGruas();
  }
}
