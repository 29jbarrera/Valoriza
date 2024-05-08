import { Routes } from '@angular/router';
import { StockComponent } from './pages/stock-component/stock/stock.component';
import { GruasComponent } from './pages/gruas.component/gruas/gruas.component';
import { GncComponent } from './pages/gnc-component/gnc/gnc.component';

export const routes: Routes = [
  { path: 'stock', component: StockComponent },
  { path: 'gruas', component: GruasComponent },
  { path: 'gnc', component: GncComponent },
];
