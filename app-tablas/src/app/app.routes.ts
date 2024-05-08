import { Routes } from '@angular/router';
import { StockComponent } from './pages/stock-component/stock/stock.component';
import { GruasComponent } from './pages/gruas.component/gruas/gruas.component';
import { GncComponent } from './pages/gnc-component/gnc/gnc.component';
import { GastosComponent } from './pages/Gastos-Taller/gastos/gastos.component';

export const routes: Routes = [
  { path: 'stock', component: StockComponent },
  { path: 'gruas', component: GruasComponent },
  { path: 'gastos-taller', component: GastosComponent },
  { path: 'gnc', component: GncComponent },

];
