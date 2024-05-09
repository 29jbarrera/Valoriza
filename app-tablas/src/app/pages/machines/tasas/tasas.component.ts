import { Component } from '@angular/core';
import { TasasFormComponent } from './tasas-form/tasas-form.component';
import { TasasTableComponent } from './tasas-table/tasas-table.component';

@Component({
  selector: 'app-tasas',
  standalone: true,
  imports: [TasasFormComponent,TasasTableComponent],
  templateUrl: './tasas.component.html',
  styleUrl: './tasas.component.css'
})
export class TasasComponent {

}
