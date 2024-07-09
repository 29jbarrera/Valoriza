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

export interface CreateImplementosHistoricoDto { 
    idMaquinaria?: number;
    idMaquinariaImplemento?: number;
    idImplemento?: number;
    fechaDesde?: Date;
    fechaHasta?: Date;
    descripcion: string;
    marca?: string;
    modelo?: string;
    serie?: string;
    precio?: number;
    tasa?: number;
    codMoneda?: string;
    contrato?: string;
    codTipoPago?: string;
    banco?: string;
    fecha?: Date;
    duracion?: number;
    mesesAmortizacion?: number;
    fechaAmortizacion?: Date;
    mesesFinanciero?: number;
    fechaFinanciero?: Date;
    porcentajeFinanciero?: number;
    codMonedaTasa?: string;
    numeroActivoSap?: string;
}