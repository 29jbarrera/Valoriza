import { Routes } from '@angular/router';
import { StockComponent } from './pages/stock/stock.component';
import { GruasComponent } from './pages/gruas/gruas.component';

export const routes: Routes = [
  { path: 'stock', component: StockComponent },
  { path: 'gruas', component: GruasComponent }
];
