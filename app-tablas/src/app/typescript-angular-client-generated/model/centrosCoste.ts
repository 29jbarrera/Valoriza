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
import { GruposCentro } from './gruposCentro';

export interface CentrosCoste { 
    id?: number;
    idGrupoCentro?: number;
    grupoCentro?: GruposCentro;
    codigo?: string;
    nombre?: string;
}