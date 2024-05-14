import { Component } from '@angular/core';
import { SegurosTableComponent } from './seguros-table/seguros-table.component';

@Component({
  selector: 'app-seguros',
  standalone: true,
  imports: [SegurosTableComponent],
  templateUrl: './seguros.component.html',
  styleUrl: './seguros.component.css'
})
export class SegurosComponent {

}
