import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DocComponent } from './doc/doc.component';
import { LogotypeComponent } from './components/logotype/logotype.component';
import { MenuComponent } from './components/menu/menu.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/header/header.component';
import { FormlyModule } from '@ngx-formly/core';
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
    DocComponent,
    LogotypeComponent,
    MenuComponent,
    NavigationComponent,
    MapComponent,
    HeaderComponent,
    ReactiveFormsModule,
    //

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-tablas';
}
