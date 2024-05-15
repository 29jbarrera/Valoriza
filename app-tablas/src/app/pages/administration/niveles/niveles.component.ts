import { Component } from '@angular/core';
import { NivelesTableComponent } from './niveles-table/niveles-table.component';

@Component({
  selector: 'app-niveles',
  standalone: true,
  imports: [NivelesTableComponent],
  templateUrl: './niveles.component.html',
  styleUrl: './niveles.component.css'
})
export class NivelesComponent {

}
