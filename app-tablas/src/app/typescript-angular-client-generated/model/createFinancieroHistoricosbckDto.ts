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
import { Implemento } from './implemento';
import { Maquinaria } from './maquinaria';

export interface CreateFinancieroHistoricosbckDto { 
    idMaquinaria?: number;
    maquinaria?: Maquinaria;
    idImplemento?: number;
    implemento?: Implemento;
    fecha?: Date;
    financiero?: number;
    codMoneda?: string;
}