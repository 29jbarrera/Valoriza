import { Component } from '@angular/core';
import { ItvsFormComponent } from './itvs-form/itvs-form.component';
import { ItvsTableComponent } from './itvs-table/itvs-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-itvs',
  standalone: true,
  imports: [ItvsFormComponent, ItvsTableComponent, HeaderComponent],
  templateUrl: './itvs.component.html',
  styleUrl: './itvs.component.css',
})
export class ItvsComponent {}
