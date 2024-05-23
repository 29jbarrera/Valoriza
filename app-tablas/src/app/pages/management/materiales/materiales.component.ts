import { Component } from '@angular/core';
import { MaterialesTableComponent } from './materiales-table/materiales-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-materiales',
  standalone: true,
  imports: [MaterialesTableComponent, HeaderComponent],
  templateUrl: './materiales.component.html',
  styleUrl: './materiales.component.scss',
})
export class MaterialesComponent {}
