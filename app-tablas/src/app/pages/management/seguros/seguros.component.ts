import { Component } from '@angular/core';
import { SegurosTableComponent } from './seguros-table/seguros-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-seguros',
  standalone: true,
  imports: [SegurosTableComponent, HeaderComponent],
  templateUrl: './seguros.component.html',
  styleUrl: './seguros.component.scss'
})
export class SegurosComponent {

}
