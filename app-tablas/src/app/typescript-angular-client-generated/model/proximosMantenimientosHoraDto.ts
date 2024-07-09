/**
 * Valoriza Park API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface ProximosMantenimientosHoraDto { 
    id?: number;
    nombreCentroMaquinaria: string;
    descripcionSubfamiliaMaquinaria: string;
    matricula: string;
    codigoNivelMantenimiento: string;
    idNivelMantimiento?: number;
    posicion?: number;
    idMaquinaria?: number;
    ultimosHoras?: number;
    ultimaFecha?: Date;
    kmInicialesMant?: number;
    horasFinalesMant?: number;
    horasFaltan?: number;
    media?: number;
    dias?: number;
    diasRedondeo?: number;
    fechaEstimada?: Date;
    valor?: number;
    idEmpresa?: number;
    idLang?: number;
    idCentro?: number;
    codigo: string;
    codigoGrupo: string;
    tipoCentro?: string;
    operativa?: boolean;
}