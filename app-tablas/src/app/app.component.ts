import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RippleModule,
    InputTextModule,
    BadgeModule,
    // StyleClassModule,
    ButtonModule,
    // MenuModule,
    // DashboardRoutingModule,
    // BlockViewerModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-tablas';

  menu_items = [
    {
      class: 'pi pi-home mr-2',
      name: 'stock',
      path: 'stock',
    },
    {
      class: 'pi pi-home mr-2',
      name: 'gruas',
      path: 'gruas',
    },
    {
      class: 'pi pi-home mr-2',
      name: 'gnc',
      path: 'gnc',
    },
    {
      class: 'pi pi-home mr-2',
      name: 'gastos-taller',
      path: 'gastos-taller',
    },
    {
      class: 'pi pi-home mr-2',
      name: 'horometros-kilometros',
      path: 'horometros-kilometros',
    },
  ];
}
