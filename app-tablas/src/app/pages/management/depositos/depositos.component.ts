import { Component } from '@angular/core';
import { DepositosTableComponent } from './depositos-table/depositos-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-depositos',
  standalone: true,
  imports: [DepositosTableComponent, HeaderComponent],
  templateUrl: './depositos.component.html',
  styleUrl: './depositos.component.css',
})
export class DepositosComponent {}
