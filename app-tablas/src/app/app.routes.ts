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
import { RepostajesMaquinariaComponent } from './pages/management/repostajes-maquinaria/repostajes.component';
import { ProveedoresComponent } from './pages/management/proveedores/proveedores.component';
import { MaterialesComponent } from './pages/management/materiales/materiales.component';
import { CambioCentroComponent } from './pages/management/cambio-centro/cambio-centro.component';
import { RepostajeVehiculosComponent } from './pages/management/repostaje-vehiculos/repostaje-vehiculos.component';
import { FamiliasSubfamiliasComponent } from './pages/administration/familias-subfamilias/familias-subfamilias.component';
import { LimiteAvisosComponent } from './pages/administration/limite-avisos/limite-avisos.component';
import { NivelesAccionComponent } from './pages/administration/niveles-accion/niveles-accion.component';
import { NivelesComponent } from './pages/administration/niveles/niveles.component';
import { TablasGlobalesComponent } from './pages/administration/tablas-globales/tablas-globales.component';

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
        path: 'repostajes-maquinaria',
        component: RepostajesMaquinariaComponent,
      },
      {
        path: 'repostajes-vehiculos',
        component: RepostajeVehiculosComponent,
      },
      {
        path: 'proveedores',
        component: ProveedoresComponent,
      },
      {
        path: 'materiales',
        component: MaterialesComponent,
      },
      {
        path: 'cambio-centro',
        component: CambioCentroComponent,
      },
    ],
  },
  {
    path: 'administration',
    children: [
      {
        path: 'familias-subfamilias',
        component: FamiliasSubfamiliasComponent,
      },
      {
        path: 'limite-avisos',
        component: LimiteAvisosComponent,
      },
      {
        path: 'niveles-accion',
        component: NivelesAccionComponent,
      },
      {
        path: 'niveles',
        component: NivelesComponent,
      },
      {
        path: 'globales',
        component: TablasGlobalesComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'machines/stock',
  },
];
