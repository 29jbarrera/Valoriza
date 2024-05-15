import { Component } from '@angular/core';
import { LimiteAvisosTableComponent } from './limite-avisos-table/limite-avisos-table.component';

@Component({
  selector: 'app-limite-avisos',
  standalone: true,
  imports: [LimiteAvisosTableComponent],
  templateUrl: './limite-avisos.component.html',
  styleUrl: './limite-avisos.component.css'
})
export class LimiteAvisosComponent {

}
