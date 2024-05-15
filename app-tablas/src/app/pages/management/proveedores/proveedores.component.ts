import { Component } from '@angular/core';
import { ProveedoresTableComponent } from './proveedores-table/proveedores-table.component';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [ProveedoresTableComponent, HeaderComponent],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent {

}
