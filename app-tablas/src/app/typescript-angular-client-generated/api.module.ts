import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { CategoriaService } from './api/categoria.service';
import { CategoriasLangService } from './api/categoriasLang.service';
import { ChasisHistoricoService } from './api/chasisHistorico.service';
import { DepositoService } from './api/deposito.service';
import { EquiposService } from './api/equipos.service';
import { FamiliaService } from './api/familia.service';
import { FamiliasLangService } from './api/familiasLang.service';
import { FinancieroHistoricoService } from './api/financieroHistorico.service';
import { FinancieroHistoricosbckService } from './api/financieroHistoricosbck.service';
import { GastosTallerService } from './api/gastosTaller.service';
import { GastosTallerDocService } from './api/gastosTallerDoc.service';
import { GncService } from './api/gnc.service';
import { GncsDocService } from './api/gncsDoc.service';
import { GncsHistoricoService } from './api/gncsHistorico.service';
import { GruaService } from './api/grua.service';
import { GruasDocService } from './api/gruasDoc.service';
import { GruasHistoricoService } from './api/gruasHistorico.service';
import { HmKmService } from './api/hmKm.service';
import { HmKmHistoricoService } from './api/hmKmHistorico.service';
import { HmKmHistoricosBckService } from './api/hmKmHistoricosBck.service';
import { ImplementoService } from './api/implemento.service';
import { ImplementosHistoricoService } from './api/implementosHistorico.service';
import { ImpuestoService } from './api/impuesto.service';
import { ImpuestosHistoricoService } from './api/impuestosHistorico.service';
import { InspeccionesTecnicaService } from './api/inspeccionesTecnica.service';
import { InspeccionesTecnicasDocService } from './api/inspeccionesTecnicasDoc.service';
import { InspeccionesTecnicasHistoricoService } from './api/inspeccionesTecnicasHistorico.service';
import { InstalacioneService } from './api/instalacione.service';
import { InstalacionesElementoService } from './api/instalacionesElemento.service';
import { InstalacionesOperacioneService } from './api/instalacionesOperacione.service';
import { InstalacionesOperacionesLangService } from './api/instalacionesOperacionesLang.service';
import { MantenimientoRepostajeService } from './api/mantenimientoRepostaje.service';
import { MaquinariaService } from './api/maquinaria.service';
import { MaquinariaCentrosHistoricoService } from './api/maquinariaCentrosHistorico.service';
import { MaquinariaDocService } from './api/maquinariaDoc.service';
import { MaquinariaImagenesDocService } from './api/maquinariaImagenesDoc.service';
import { MaquinariasEliminadaService } from './api/maquinariasEliminada.service';
import { MaquinariasHistoricoService } from './api/maquinariasHistorico.service';
import { MaquinariasNiveleService } from './api/maquinariasNivele.service';
import { MaquinariasNivelesDocService } from './api/maquinariasNivelesDoc.service';
import { MarcaService } from './api/marca.service';
import { MarcasReferenciasMaterialeService } from './api/marcasReferenciasMateriale.service';
import { NivelesMantenimientoService } from './api/nivelesMantenimiento.service';
import { NivelesMantenimientoAccioneService } from './api/nivelesMantenimientoAccione.service';
import { NivelesMantenimientoAccionesLangService } from './api/nivelesMantenimientoAccionesLang.service';
import { NivelesMantenimientoGruposAccioneService } from './api/nivelesMantenimientoGruposAccione.service';
import { NivelesMantenimientoTiposService } from './api/nivelesMantenimientoTipos.service';
import { NivelesMantenimientoTiposAccioneService } from './api/nivelesMantenimientoTiposAccione.service';
import { NotificacionesEstadoMaquinariaExternoService } from './api/notificacionesEstadoMaquinariaExterno.service';
import { ObservacioneService } from './api/observacione.service';
import { ParteTrabajoDocService } from './api/parteTrabajoDoc.service';
import { ParteTrabajoMaterialeService } from './api/parteTrabajoMateriale.service';
import { ParteTrabajoMecanicoService } from './api/parteTrabajoMecanico.service';
import { PartesTrabajoService } from './api/partesTrabajo.service';
import { PartesTrabajoDocService } from './api/partesTrabajoDoc.service';
import { PesoCargaService } from './api/pesoCarga.service';
import { PrestamosStockService } from './api/prestamosStock.service';
import { ProveedoreService } from './api/proveedore.service';
import { ReferenciasMaterialeService } from './api/referenciasMateriale.service';
import { RegularizacionesStockService } from './api/regularizacionesStock.service';
import { ReparacioneService } from './api/reparacione.service';
import { ReparacionesAdjuntosDocService } from './api/reparacionesAdjuntosDoc.service';
import { ReparacionesDocService } from './api/reparacionesDoc.service';
import { ReparacionesHistoricoService } from './api/reparacionesHistorico.service';
import { RepostajeService } from './api/repostaje.service';
import { SeguroService } from './api/seguro.service';
import { SegurosDocService } from './api/segurosDoc.service';
import { SegurosHistoricoService } from './api/segurosHistorico.service';
import { StockService } from './api/stock.service';
import { SubFamiliaService } from './api/subFamilia.service';
import { SubFamiliasLangService } from './api/subFamiliasLang.service';
import { SubFamiliasNiveleService } from './api/subFamiliasNivele.service';
import { SubFamiliasReferenciasMaterialeService } from './api/subFamiliasReferenciasMateriale.service';
import { TacografoService } from './api/tacografo.service';
import { TacografosDocService } from './api/tacografosDoc.service';
import { TacografosHistoricoService } from './api/tacografosHistorico.service';
import { TasasHistoricoService } from './api/tasasHistorico.service';
import { UnidadMedidaTiposCombustibleService } from './api/unidadMedidaTiposCombustible.service';
import { UnidadesMedidaService } from './api/unidadesMedida.service';
import { UnidadesMedidaLangService } from './api/unidadesMedidaLang.service';
import { XCentrosCosteService } from './api/xCentrosCoste.service';
import { XEmpresaService } from './api/xEmpresa.service';
import { XGlobalTableService } from './api/xGlobalTable.service';
import { XGlobalTablesValueService } from './api/xGlobalTablesValue.service';
import { XGlobalTablesValuesLangService } from './api/xGlobalTablesValuesLang.service';
import { XGruposCentroService } from './api/xGruposCentro.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    CategoriaService,
    CategoriasLangService,
    ChasisHistoricoService,
    DepositoService,
    EquiposService,
    FamiliaService,
    FamiliasLangService,
    FinancieroHistoricoService,
    FinancieroHistoricosbckService,
    GastosTallerService,
    GastosTallerDocService,
    GncService,
    GncsDocService,
    GncsHistoricoService,
    GruaService,
    GruasDocService,
    GruasHistoricoService,
    HmKmService,
    HmKmHistoricoService,
    HmKmHistoricosBckService,
    ImplementoService,
    ImplementosHistoricoService,
    ImpuestoService,
    ImpuestosHistoricoService,
    InspeccionesTecnicaService,
    InspeccionesTecnicasDocService,
    InspeccionesTecnicasHistoricoService,
    InstalacioneService,
    InstalacionesElementoService,
    InstalacionesOperacioneService,
    InstalacionesOperacionesLangService,
    MantenimientoRepostajeService,
    MaquinariaService,
    MaquinariaCentrosHistoricoService,
    MaquinariaDocService,
    MaquinariaImagenesDocService,
    MaquinariasEliminadaService,
    MaquinariasHistoricoService,
    MaquinariasNiveleService,
    MaquinariasNivelesDocService,
    MarcaService,
    MarcasReferenciasMaterialeService,
    NivelesMantenimientoService,
    NivelesMantenimientoAccioneService,
    NivelesMantenimientoAccionesLangService,
    NivelesMantenimientoGruposAccioneService,
    NivelesMantenimientoTiposService,
    NivelesMantenimientoTiposAccioneService,
    NotificacionesEstadoMaquinariaExternoService,
    ObservacioneService,
    ParteTrabajoDocService,
    ParteTrabajoMaterialeService,
    ParteTrabajoMecanicoService,
    PartesTrabajoService,
    PartesTrabajoDocService,
    PesoCargaService,
    PrestamosStockService,
    ProveedoreService,
    ReferenciasMaterialeService,
    RegularizacionesStockService,
    ReparacioneService,
    ReparacionesAdjuntosDocService,
    ReparacionesDocService,
    ReparacionesHistoricoService,
    RepostajeService,
    SeguroService,
    SegurosDocService,
    SegurosHistoricoService,
    StockService,
    SubFamiliaService,
    SubFamiliasLangService,
    SubFamiliasNiveleService,
    SubFamiliasReferenciasMaterialeService,
    TacografoService,
    TacografosDocService,
    TacografosHistoricoService,
    TasasHistoricoService,
    UnidadMedidaTiposCombustibleService,
    UnidadesMedidaService,
    UnidadesMedidaLangService,
    XCentrosCosteService,
    XEmpresaService,
    XGlobalTableService,
    XGlobalTablesValueService,
    XGlobalTablesValuesLangService,
    XGruposCentroService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
