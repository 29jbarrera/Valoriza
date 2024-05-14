import { Component } from '@angular/core';
import { DepositosTableComponent } from './depositos-table/depositos-table.component';

@Component({
  selector: 'app-depositos',
  standalone: true,
  imports: [DepositosTableComponent],
  templateUrl: './depositos.component.html',
  styleUrl: './depositos.component.css'
})
export class DepositosComponent {

}
