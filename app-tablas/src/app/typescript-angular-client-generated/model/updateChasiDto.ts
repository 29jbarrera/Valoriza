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

export interface UpdateChasiDto { 
    id?: number;
    idEmpresa?: number;
    idMaquinaria?: number;
    marca: string;
    modelo: string;
    toneladas?: number;
    precio?: number;
    codMoneda: string;
    codTipoPago: string;
    contrato?: string;
    banco?: string;
    fecha?: Date;
    duracion?: number;
    mesesAmortizacion?: number;
    fechaAmortizacion?: Date;
    mesesFinanciero?: number;
    fechaFinanciero?: Date;
    porcentajeFinanciero?: number;
    tasa?: number;
    duracionTasas?: number;
    codMonedaTasa?: string;
    numeroActivoSap?: string;
}