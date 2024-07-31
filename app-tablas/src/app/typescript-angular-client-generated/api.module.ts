import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AmortizacionHistoricoService } from './api/amortizacionHistorico.service';
import { AppParameterService } from './api/appParameter.service';
import { BidonesService } from './api/bidones.service';
import { CentrosCosteService } from './api/centrosCoste.service';
import { DepositosService } from './api/depositos.service';
import { FamiliasService } from './api/familias.service';
import { GastosTallerService } from './api/gastosTaller.service';
import { GncService } from './api/gnc.service';
import { GncDocsService } from './api/gncDocs.service';
import { GruasService } from './api/gruas.service';
import { GruposCentroService } from './api/gruposCentro.service';
import { HmKmHistoricoService } from './api/hmKmHistorico.service';
import { ImpuestosService } from './api/impuestos.service';
import { ImpuestosHistoricoService } from './api/impuestosHistorico.service';
import { InspeccionesTecnicasHistoricoService } from './api/inspeccionesTecnicasHistorico.service';
import { InstalacionesService } from './api/instalaciones.service';
import { MaquinariasService } from './api/maquinarias.service';
import { MaquinariasChasisService } from './api/maquinariasChasis.service';
import { MaquinariasDocsService } from './api/maquinariasDocs.service';
import { MaquinariasEquiposService } from './api/maquinariasEquipos.service';
import { MaquinariasHistoricoService } from './api/maquinariasHistorico.service';
import { MaquinariasImagenesDocsService } from './api/maquinariasImagenesDocs.service';
import { MaquinariasImplementosService } from './api/maquinariasImplementos.service';
import { MaquinariasInspeccionesTecnicasService } from './api/maquinariasInspeccionesTecnicas.service';
import { MaquinariasInspeccionesTecnicasDocsService } from './api/maquinariasInspeccionesTecnicasDocs.service';
import { MaquinariasNivelesService } from './api/maquinariasNiveles.service';
import { MaquinariasNivelesDocsService } from './api/maquinariasNivelesDocs.service';
import { MaquinariasObservacionesService } from './api/maquinariasObservaciones.service';
import { MaquinariasReparacionesService } from './api/maquinariasReparaciones.service';
import { MaquinariasRepostajesService } from './api/maquinariasRepostajes.service';
import { MaquinariasTacografosService } from './api/maquinariasTacografos.service';
import { MarcaService } from './api/marca.service';
import { NivelMantenimientoService } from './api/nivelMantenimiento.service';
import { NivelMantenimientoAccionService } from './api/nivelMantenimientoAccion.service';
import { NivelMantenimientoAccionesLangService } from './api/nivelMantenimientoAccionesLang.service';
import { NivelMantenimientoTipoService } from './api/nivelMantenimientoTipo.service';
import { NivelMantenimientoTiposAccionService } from './api/nivelMantenimientoTiposAccion.service';
import { ParteTrabajoService } from './api/parteTrabajo.service';
import { ParteTrabajoDocService } from './api/parteTrabajoDoc.service';
import { ParteTrabajoMecanicoService } from './api/parteTrabajoMecanico.service';
import { PartesTrabajoDocService } from './api/partesTrabajoDoc.service';
import { PesoCargaService } from './api/pesoCarga.service';
import { PrestamosStockService } from './api/prestamosStock.service';
import { ProveedorService } from './api/proveedor.service';
import { ReparacionesDocService } from './api/reparacionesDoc.service';
import { SeguroService } from './api/seguro.service';
import { SegurosDocService } from './api/segurosDoc.service';
import { StockService } from './api/stock.service';
import { TacografosDocService } from './api/tacografosDoc.service';
import { TacografosHistoricoService } from './api/tacografosHistorico.service';
import { UnidadMedidaTiposCombustibleService } from './api/unidadMedidaTiposCombustible.service';
import { UnidadesMedidaService } from './api/unidadesMedida.service';
import { UnidadesMedidaLangService } from './api/unidadesMedidaLang.service';
import { VistasService } from './api/vistas.service';
import { XGlobalTableService } from './api/xGlobalTable.service';
import { XGlobalTablesValueService } from './api/xGlobalTablesValue.service';
import { XGlobalTablesValuesLangService } from './api/xGlobalTablesValuesLang.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AmortizacionHistoricoService,
    AppParameterService,
    BidonesService,
    CentrosCosteService,
    DepositosService,
    FamiliasService,
    GastosTallerService,
    GncService,
    GncDocsService,
    GruasService,
    GruposCentroService,
    HmKmHistoricoService,
    ImpuestosService,
    ImpuestosHistoricoService,
    InspeccionesTecnicasHistoricoService,
    InstalacionesService,
    MaquinariasService,
    MaquinariasChasisService,
    MaquinariasDocsService,
    MaquinariasEquiposService,
    MaquinariasHistoricoService,
    MaquinariasImagenesDocsService,
    MaquinariasImplementosService,
    MaquinariasInspeccionesTecnicasService,
    MaquinariasInspeccionesTecnicasDocsService,
    MaquinariasNivelesService,
    MaquinariasNivelesDocsService,
    MaquinariasObservacionesService,
    MaquinariasReparacionesService,
    MaquinariasRepostajesService,
    MaquinariasTacografosService,
    MarcaService,
    NivelMantenimientoService,
    NivelMantenimientoAccionService,
    NivelMantenimientoAccionesLangService,
    NivelMantenimientoTipoService,
    NivelMantenimientoTiposAccionService,
    ParteTrabajoService,
    ParteTrabajoDocService,
    ParteTrabajoMecanicoService,
    PartesTrabajoDocService,
    PesoCargaService,
    PrestamosStockService,
    ProveedorService,
    ReparacionesDocService,
    SeguroService,
    SegurosDocService,
    StockService,
    TacografosDocService,
    TacografosHistoricoService,
    UnidadMedidaTiposCombustibleService,
    UnidadesMedidaService,
    UnidadesMedidaLangService,
    VistasService,
    XGlobalTableService,
    XGlobalTablesValueService,
    XGlobalTablesValuesLangService ]
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
