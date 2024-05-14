import { Component } from '@angular/core';

import { PreventivoFormComponent } from './preventivo-form/preventivo-form.component';
import { PreventivoTableComponent } from './preventivo-table/preventivo-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-preventivo',
  standalone: true,
  imports: [PreventivoFormComponent, PreventivoTableComponent, HeaderComponent],
  templateUrl: './preventivo.component.html',
  styleUrl: './preventivo.component.css',
})
export class PreventivoComponent {}
