import { Routes } from '@angular/router';
import { StockComponent } from './pages/machines/stock-component/stock/stock.component';
import { GruasComponent } from './pages/machines/gruas/gruas.component';
import { GncComponent } from './pages/machines/gnc/gnc.component';
import { GastosComponent } from './pages/machines/gastos/gastos.component';
import { HorometrosKilometrosComponent } from './pages/machines/horometros-kilometros/horometros-kilometros.component';
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
import { SegurosComponent } from './pages/management/seguros/seguros.component';
import { MarcasComponent } from './pages/management/marcas/marcas.component';
import { CategoriasComponent } from './pages/management/categorias/categorias.component';
import { ImpuestosComponent } from './pages/management/impuestos/impuestos.component';
import { DepositosComponent } from './pages/management/depositos/depositos.component';
import { RepostajesComponent } from './pages/management/repostajes/repostajes.component';
import { ProveedoresComponent } from './pages/management/proveedores/proveedores.component';
import { MaterialesComponent } from './pages/management/materiales/materiales.component';

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
    path: 'management',
    children: [
      {
        path: 'seguros',
        component: SegurosComponent,
      },
      {
        path: 'marcas',
        component: MarcasComponent,
      },
      {
        path: 'categorias',
        component: CategoriasComponent,
      },
      {
        path: 'impuestos',
        component: ImpuestosComponent,
      },
      {
        path: 'depositos',
        component: DepositosComponent,
      },
      {
        path: 'repostajes',
        component: RepostajesComponent,
      },
      {
        path: 'proveedores',
        component: ProveedoresComponent,
      },
      {
        path: 'materiales',
        component: MaterialesComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'machines/stock',
  },
];
