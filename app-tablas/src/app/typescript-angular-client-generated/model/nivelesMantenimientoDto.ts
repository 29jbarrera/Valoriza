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

export interface NivelesMantenimientoDto { 
    id?: number;
    idEmpresa?: number;
    codigo: string;
    frecuencia?: number;
    tipo: string;
    media?: number;
    esPeriodico?: boolean;
    fechaInicio?: Date;
}