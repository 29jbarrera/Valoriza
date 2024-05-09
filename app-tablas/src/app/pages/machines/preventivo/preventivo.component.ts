import { Component } from '@angular/core';

import { PreventivoFormComponent } from './preventivo-form/preventivo-form.component';
import { PreventivoTableComponent } from './preventivo-table/preventivo-table.component';

@Component({
  selector: 'app-preventivo',
  standalone: true,
  imports: [PreventivoFormComponent, PreventivoTableComponent],
  templateUrl: './preventivo.component.html',
  styleUrl: './preventivo.component.css',
})
export class PreventivoComponent {}
