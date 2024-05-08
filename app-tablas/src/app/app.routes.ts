import { Routes } from '@angular/router';
import { StockComponent } from './pages/stock-component/stock/stock.component';
import { GruasComponent } from './pages/gruas.component/gruas/gruas.component';
import { GncComponent } from './pages/gnc-component/gnc/gnc.component';
import { GastosComponent } from './pages/Gastos-Taller/gastos/gastos.component';
import { HorometrosKilometrosComponent } from './pages/horometros-kilometros/horometros-kilometros/horometros-kilometros.component';
import { TacografosComponent } from './pages/machines/tacografos/tacografos.component';
import { InstalacionesComponent } from './pages/machines/instalaciones/instalaciones.component';
import { ItvsComponent } from './pages/machines/itvs/itvs.component';
import { PreventivoComponent } from './pages/machines/preventivo/preventivo.component';
import { ReparacionesComponent } from './pages/machines/reparaciones/reparaciones.component';
import { ReparacionesCentroComponent } from './pages/machines/reparaciones-centro/reparaciones-centro.component';
import { PartesTrabajoComponent } from './pages/machines/partes-trabajo/partes-trabajo.component';
import { TasasComponent } from './pages/machines/tasas/tasas.component';
import { TasasCentrosComponent } from './pages/machines/tasas-centros/tasas-centros.component';
import { RatiosMaquinariaComponent } from './pages/machines/ratios-maquinaria/ratios-maquinaria.component';
import { RatiosCentroComponent } from './pages/machines/ratios-centro/ratios-centro.component';

export const routes: Routes = [
  {
    path: 'machines',
    children: [
      // 1º Vuelta
      {
        path: 'horometros-kilometros',
        component: HorometrosKilometrosComponent,
      },
      // TODO
      { path: 'preventivo', component: PreventivoComponent },
      { path: 'reparaciones', component: ReparacionesComponent },
      { path: 'reparaciones-centro', component: ReparacionesCentroComponent },
      // 1º Vuelta
      { path: 'gastos-taller', component: GastosComponent },
      // TODO
      { path: 'partes-trabajo', component: PartesTrabajoComponent },
      { path: 'tasas', component: TasasComponent },
      { path: 'tasas-centro', component: TasasCentrosComponent },
      { path: 'ratios-maquinaria', component: RatiosMaquinariaComponent },
      { path: 'ratios-centro', component: RatiosCentroComponent },
      { path: 'instalaciones', component: InstalacionesComponent },
      { path: 'itvs', component: ItvsComponent },
      { path: 'tacografos', component: TacografosComponent },
      // 1º Vuelta
      { path: 'gnc', component: GncComponent },
      { path: 'gruas', component: GruasComponent },
      { path: 'stock', component: StockComponent },
    ],
  },
  {
    path: '**',
    redirectTo: 'machines/stock',
  },
];
