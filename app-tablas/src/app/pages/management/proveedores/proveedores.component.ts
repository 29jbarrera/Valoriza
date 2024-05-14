import { Component } from '@angular/core';
import { ProveedoresTableComponent } from './proveedores-table/proveedores-table.component';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [ProveedoresTableComponent],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent {

}
