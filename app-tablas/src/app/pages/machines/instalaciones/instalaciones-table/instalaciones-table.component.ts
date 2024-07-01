import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { Instalaciones } from '../type';
import { InstalacionesService } from '../instalaciones.service';


@Component({
  selector: 'app-instalaciones-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './instalaciones-table.component.html',
  styleUrl: './instalaciones-table.component.scss'
})
export class InstalacionesTableComponent implements OnInit {
  instalaciones: Instalaciones[] = [];
  searchForm: FormGroup;

  constructor(
    private InstalacionesService: InstalacionesService ,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      installationCentre: [''],
      name: [''],
      comments: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.instalaciones = await this.InstalacionesService.getInstalaciones();
  }
}
