import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AmortizacionHistoricoService } from './api/amortizacionHistorico.service';
import { AppParameterService } from './api/appParameter.service';
import { BidoneService } from './api/bidone.service';
import { CategoriaService } from './api/categoria.service';
import { CategoriasLangService } from './api/categoriasLang.service';
import { CenterService } from './api/center.service';
import { CentmachineService } from './api/centmachine.service';
import { CentrosCosteService } from './api/centrosCoste.service';
import { CentrosViewService } from './api/centrosView.service';
import { ChasiService } from './api/chasi.service';
import { ChasisHistoricoService } from './api/chasisHistorico.service';
import { CombustibleService } from './api/combustible.service';
import { DepositService } from './api/deposit.service';
import { DepositoService } from './api/deposito.service';
import { DetailService } from './api/detail.service';
import { ElementService } from './api/element.service';
import { EmpresaService } from './api/empresa.service';
import { EmpresasViewService } from './api/empresasView.service';
import { EquiposService } from './api/equipos.service';
import { FamiliaService } from './api/familia.service';
import { FamiliasLangService } from './api/familiasLang.service';
import { FamilyService } from './api/family.service';
import { FinancieroHistoricoService } from './api/financieroHistorico.service';
import { FinancieroHistoricosbckService } from './api/financieroHistoricosbck.service';
import { GarageService } from './api/garage.service';
import { GastosTallerService } from './api/gastosTaller.service';
import { GastosTallerDocService } from './api/gastosTallerDoc.service';
import { GlobalTablesValuesViewService } from './api/globalTablesValuesView.service';
import { GncService } from './api/gnc.service';
import { GncsDocService } from './api/gncsDoc.service';
import { GncsHistoricoService } from './api/gncsHistorico.service';
import { GruaService } from './api/grua.service';
import { GruasDocService } from './api/gruasDoc.service';
import { GruasHistoricoService } from './api/gruasHistorico.service';
import { GruposCentroService } from './api/gruposCentro.service';
import { GruposCentrosViewService } from './api/gruposCentrosView.service';
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
import { InstallationService } from './api/installation.service';
import { LevelService } from './api/level.service';
import { LiterService } from './api/liter.service';
import { MachineService } from './api/machine.service';
import { MaintenanceService } from './api/maintenance.service';
import { MantenimientoRepostajeService } from './api/mantenimientoRepostaje.service';
import { MaquinariaService } from './api/maquinaria.service';
import { MaquinariaCentrosHistoricoService } from './api/maquinariaCentrosHistorico.service';
import { MaquinariaDocService } from './api/maquinariaDoc.service';
import { MaquinariaDocViewService } from './api/maquinariaDocView.service';
import { MaquinariaImagenesDocService } from './api/maquinariaImagenesDoc.service';
import { MaquinariaViewService } from './api/maquinariaView.service';
import { MaquinariasEliminadaService } from './api/maquinariasEliminada.service';
import { MaquinariasFechaExpedicionService } from './api/maquinariasFechaExpedicion.service';
import { MaquinariasGncService } from './api/maquinariasGnc.service';
import { MaquinariasHistoricoService } from './api/maquinariasHistorico.service';
import { MaquinariasNiveleService } from './api/maquinariasNivele.service';
import { MaquinariasNivelesDocService } from './api/maquinariasNivelesDoc.service';
import { MarcaService } from './api/marca.service';
import { MarcasReferenciasMaterialeService } from './api/marcasReferenciasMateriale.service';
import { MonedaService } from './api/moneda.service';
import { NivelesMantenimientoService } from './api/nivelesMantenimiento.service';
import { NivelesMantenimientoAccioneService } from './api/nivelesMantenimientoAccione.service';
import { NivelesMantenimientoAccionesLangService } from './api/nivelesMantenimientoAccionesLang.service';
import { NivelesMantenimientoGruposAccioneService } from './api/nivelesMantenimientoGruposAccione.service';
import { NivelesMantenimientoTiposService } from './api/nivelesMantenimientoTipos.service';
import { NivelesMantenimientoTiposAccioneService } from './api/nivelesMantenimientoTiposAccione.service';
import { NotificacionesEstadoMaquinariaExternoService } from './api/notificacionesEstadoMaquinariaExterno.service';
import { ObservacioneService } from './api/observacione.service';
import { ObservationService } from './api/observation.service';
import { OperationService } from './api/operation.service';
import { ParametroService } from './api/parametro.service';
import { ParteTrabajoDocService } from './api/parteTrabajoDoc.service';
import { ParteTrabajoMaterialeService } from './api/parteTrabajoMateriale.service';
import { ParteTrabajoMecanicoService } from './api/parteTrabajoMecanico.service';
import { PartesTrabajoService } from './api/partesTrabajo.service';
import { PartesTrabajoDocService } from './api/partesTrabajoDoc.service';
import { PbiTasasViewService } from './api/pbiTasasView.service';
import { PesoCargaService } from './api/pesoCarga.service';
import { PrestamosStockService } from './api/prestamosStock.service';
import { ProveedoreService } from './api/proveedore.service';
import { ProximosMantenimientoService } from './api/proximosMantenimiento.service';
import { ProximosMantenimientosHoraService } from './api/proximosMantenimientosHora.service';
import { RatiosViewService } from './api/ratiosView.service';
import { ReferenciasMaterialeService } from './api/referenciasMateriale.service';
import { RegionalService } from './api/regional.service';
import { RegularizacionesStockService } from './api/regularizacionesStock.service';
import { RepairService } from './api/repair.service';
import { ReparacioneService } from './api/reparacione.service';
import { ReparacionesAdjuntosDocService } from './api/reparacionesAdjuntosDoc.service';
import { ReparacionesCentroViewService } from './api/reparacionesCentroView.service';
import { ReparacionesDocService } from './api/reparacionesDoc.service';
import { ReparacionesHistoricoService } from './api/reparacionesHistorico.service';
import { RepostajeService } from './api/repostaje.service';
import { RlsPbiControlAccesoService } from './api/rlsPbiControlAcceso.service';
import { SeguroService } from './api/seguro.service';
import { Seguro1Service } from './api/seguro1.service';
import { SegurosDocService } from './api/segurosDoc.service';
import { SegurosHistoricoService } from './api/segurosHistorico.service';
import { SequenceService } from './api/sequence.service';
import { SolredService } from './api/solred.service';
import { StockService } from './api/stock.service';
import { SubFamiliaService } from './api/subFamilia.service';
import { SubFamiliasLangService } from './api/subFamiliasLang.service';
import { SubFamiliasNiveleService } from './api/subFamiliasNivele.service';
import { SubFamiliasReferenciasMaterialeService } from './api/subFamiliasReferenciasMateriale.service';
import { SupplyService } from './api/supply.service';
import { TacografoService } from './api/tacografo.service';
import { TacografosDocService } from './api/tacografosDoc.service';
import { TacografosHistoricoService } from './api/tacografosHistorico.service';
import { TasasCentrosViewService } from './api/tasasCentrosView.service';
import { TasasHistoricoService } from './api/tasasHistorico.service';
import { TasasHistorico1Service } from './api/tasasHistorico1.service';
import { TasasViewService } from './api/tasasView.service';
import { TypeService } from './api/type.service';
import { UnidadMedidaTiposCombustibleService } from './api/unidadMedidaTiposCombustible.service';
import { UnidadesMedidaService } from './api/unidadesMedida.service';
import { UnidadesMedidaLangService } from './api/unidadesMedidaLang.service';
import { UserTasksViewService } from './api/userTasksView.service';
import { WeightService } from './api/weight.service';
import { WorkingmaintenanceService } from './api/workingmaintenance.service';
import { WorkingpartService } from './api/workingpart.service';
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
    AmortizacionHistoricoService,
    AppParameterService,
    BidoneService,
    CategoriaService,
    CategoriasLangService,
    CenterService,
    CentmachineService,
    CentrosCosteService,
    CentrosViewService,
    ChasiService,
    ChasisHistoricoService,
    CombustibleService,
    DepositService,
    DepositoService,
    DetailService,
    ElementService,
    EmpresaService,
    EmpresasViewService,
    EquiposService,
    FamiliaService,
    FamiliasLangService,
    FamilyService,
    FinancieroHistoricoService,
    FinancieroHistoricosbckService,
    GarageService,
    GastosTallerService,
    GastosTallerDocService,
    GlobalTablesValuesViewService,
    GncService,
    GncsDocService,
    GncsHistoricoService,
    GruaService,
    GruasDocService,
    GruasHistoricoService,
    GruposCentroService,
    GruposCentrosViewService,
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
    InstallationService,
    LevelService,
    LiterService,
    MachineService,
    MaintenanceService,
    MantenimientoRepostajeService,
    MaquinariaService,
    MaquinariaCentrosHistoricoService,
    MaquinariaDocService,
    MaquinariaDocViewService,
    MaquinariaImagenesDocService,
    MaquinariaViewService,
    MaquinariasEliminadaService,
    MaquinariasFechaExpedicionService,
    MaquinariasGncService,
    MaquinariasHistoricoService,
    MaquinariasNiveleService,
    MaquinariasNivelesDocService,
    MarcaService,
    MarcasReferenciasMaterialeService,
    MonedaService,
    NivelesMantenimientoService,
    NivelesMantenimientoAccioneService,
    NivelesMantenimientoAccionesLangService,
    NivelesMantenimientoGruposAccioneService,
    NivelesMantenimientoTiposService,
    NivelesMantenimientoTiposAccioneService,
    NotificacionesEstadoMaquinariaExternoService,
    ObservacioneService,
    ObservationService,
    OperationService,
    ParametroService,
    ParteTrabajoDocService,
    ParteTrabajoMaterialeService,
    ParteTrabajoMecanicoService,
    PartesTrabajoService,
    PartesTrabajoDocService,
    PbiTasasViewService,
    PesoCargaService,
    PrestamosStockService,
    ProveedoreService,
    ProximosMantenimientoService,
    ProximosMantenimientosHoraService,
    RatiosViewService,
    ReferenciasMaterialeService,
    RegionalService,
    RegularizacionesStockService,
    RepairService,
    ReparacioneService,
    ReparacionesAdjuntosDocService,
    ReparacionesCentroViewService,
    ReparacionesDocService,
    ReparacionesHistoricoService,
    RepostajeService,
    RlsPbiControlAccesoService,
    SeguroService,
    Seguro1Service,
    SegurosDocService,
    SegurosHistoricoService,
    SequenceService,
    SolredService,
    StockService,
    SubFamiliaService,
    SubFamiliasLangService,
    SubFamiliasNiveleService,
    SubFamiliasReferenciasMaterialeService,
    SupplyService,
    TacografoService,
    TacografosDocService,
    TacografosHistoricoService,
    TasasCentrosViewService,
    TasasHistoricoService,
    TasasHistorico1Service,
    TasasViewService,
    TypeService,
    UnidadMedidaTiposCombustibleService,
    UnidadesMedidaService,
    UnidadesMedidaLangService,
    UserTasksViewService,
    WeightService,
    WorkingmaintenanceService,
    WorkingpartService,
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
