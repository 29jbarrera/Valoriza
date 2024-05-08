import { Component } from '@angular/core';

import { Gnc } from '../../../Interfaces/gnc.interface';

import { Table, TableModule } from 'primeng/table';

import { CommonModule } from '@angular/common';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gnc-table',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './gnc-table.component.html',
  styleUrl: './gnc-table.component.css'
})
export class GncTableComponent {

}
