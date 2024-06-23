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

export interface MaquinariasNiveleDto { 
    id?: number;
    idMaquinaria?: number;
    idNivelMantenimiento?: number;
    idEmpresa?: number;
    posicion?: number;
    tipo?: string;
    tipoEquipamiento?: string;
    fecha?: Date;
    horas?: number;
    kilometros?: number;
    terminado?: boolean;
    createdBy?: string;
    createdAt?: Date;
    changedBy?: string;
    changedAt?: Date;
    idHmKm?: number;
    fechaProximoMantenimiento?: Date;
}