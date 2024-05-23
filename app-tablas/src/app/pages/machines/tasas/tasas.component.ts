import { Component } from '@angular/core';
import { TasasFormComponent } from './tasas-form/tasas-form.component';
import { TasasTableComponent } from './tasas-table/tasas-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-tasas',
  standalone: true,
  imports: [TasasFormComponent, TasasTableComponent, HeaderComponent],
  templateUrl: './tasas.component.html',
  styleUrl: './tasas.component.scss',
})
export class TasasComponent {}
