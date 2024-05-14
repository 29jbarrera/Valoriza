import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { LogotypeComponent } from '../logotype/logotype.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RippleModule,
    InputTextModule,
    BadgeModule,
    // StyleClassModule,
    ButtonModule,
    RouterModule,
    LogotypeComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menu_items = [
    // {
    //   name: 'Alertas',
    //   path: 'machines',
    //   items: [],
    // },
    {
      name: 'Maquinaria',
      path: 'machines',
      items: [
        {
          class: 'fas fa-car',
          name: 'Equipamiento',
          path: 'stock1',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-money-bill-wave',
          name: 'Seguro e impuesto',
          path: 'stock2',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-gas-pump',
          name: 'Mantenimiento',
          path: 'stock2',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-car',
          name: 'ITVs',
          path: 'itvs',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-book',
          name: 'Documentacion',
          path: 'stock2',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-images',
          name: 'Imagenes',
          path: 'stock2',
          n: Math.round(Math.random() * 100),
        },
      ],
    },
    {
      name: 'Mantenimiento',
      path: 'machines',
      items: [
        {
          class: 'fas fa-list',
          name: 'Stock',
          path: 'stock',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-tools',
          name: 'Instalaciones',
          path: 'instalaciones',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-truck',
          name: 'Grúas',
          path: 'gruas',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-tools',
          name: 'Gastos',
          path: 'gastos-taller',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-tachometer-alt',
          name: 'Horómetros',
          path: 'horometros-kilometros',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-tachometer-alt',
          name: 'Preventivo',
          path: 'preventivo',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-tools',
          name: 'Reparaciones',
          path: 'reparaciones',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-tools',
          name: 'Reparaciones centro',
          path: 'reparaciones-centro',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-tachometer-alt',
          name: 'Tacógrafos',
          path: 'tacografos',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-hand-holding-usd',
          name: 'Tasas',
          path: 'tasas',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-hand-holding-usd',
          name: 'Tasas centro',
          path: 'tasas-centro',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-list',
          name: 'Ratios centro',
          path: 'ratios-centro',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-list',
          name: 'Ratios maquinaria',
          path: 'ratios-maquinaria',
          n: Math.round(Math.random() * 100),
        },
      ],
    },
    {
      name: 'Gestion',
      path: 'management',
      items: [
        {
          class: 'fas fa-shapes',
          name: 'Marcas',
          path: 'marcas',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-layer-group',
          name: 'Categorías',
          path: 'categorias',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-shield-alt',
          name: 'Seguros',
          path: 'seguros',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-hand-holding-usd',
          name: 'Impuesto',
          path: 'impuestos',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-receipt',
          name: 'Depósitos',
          path: 'depositos',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-file-invoice-dollar',
          name: 'Repostajes',
          path: 'repostajes',
          n: Math.round(Math.random() * 100),
        },
        // {
        //   class: 'fas fa-sliders-h',
        //   name: 'Mantenimientos',
        //   path: 'horometros-kilometros',
        //   n: Math.round(Math.random() * 100),
        // },

        {
          class: 'fas fa-user-tie',
          name: 'Proveedores',
          path: 'proveedores',
          n: Math.round(Math.random() * 100),
        },
        // {
        //   class: 'fas fa-building',
        //   name: 'Centro',
        //   path: 'gnc',
        //   n: Math.round(Math.random() * 100),
        // },
        {
          class: 'fas fa-cogs',
          name: 'Materiales',
          path: 'materiales',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-book',
          name: 'Partes de trabajo',
          path: 'partes-trabajo',
          n: Math.round(Math.random() * 100),
        },
        {
          class: 'fas fa-book',
          name: 'Cambio Centro',
          path: 'cambio-centro',
          n: Math.round(Math.random() * 100),
        },
      ],
    },
    {
      name: 'Administración',
      path: 'machines',
      items: [],
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  get_if_path_is_active(item: any, item2: any) {
    const path = item.path + '/' + item2.path;
    return this.router.url.includes(path);
  }

  navigate(item: any, item2: any) {
    this.router.navigate([item.path, item2.path]);
  }
}
