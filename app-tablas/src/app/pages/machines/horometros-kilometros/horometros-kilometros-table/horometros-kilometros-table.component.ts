import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

import { TableModule } from 'primeng/table';

import { HorometrosKilometrosService } from '../../../../service/horometros-kilometros.service';
import { HorometrosKilometros } from '../../../../Interfaces/horometros-kilometros.interface';

@Component({
  selector: 'app-horometros-kilometros-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './horometros-kilometros-table.component.html',
  styleUrl: './horometros-kilometros-table.component.scss',
})
export class HorometrosKilometrosTableComponent implements OnInit {
  horometrosKilometros: HorometrosKilometros[] = [];
  searchForm: FormGroup;

  constructor(
    private HorometrosKilometrosService: HorometrosKilometrosService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      machineCenter: [''],
      subFamily: [''],
      machinery: [''],
      brand: [],
      model: [''],
      finalHorometer: [''],
      finalKM: [''],
      date: [''],
    });
  }
  ngOnInit() {
    this.updateTable();
  }

  async updateTable() {
    this.horometrosKilometros =
      await this.HorometrosKilometrosService.getHorometrosKilometros();
  }
}
