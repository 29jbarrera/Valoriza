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

export interface InspeccionesTecnicaDto { 
    id?: number;
    idEmpresa?: number;
    idMaquinaria?: number;
    fecha?: Date;
    fechaProxima?: Date;
    importe?: number;
    codMoneda?: string;
    comentarios?: string;
    createdBy?: string;
    createdAt?: Date;
    changedBy?: string;
    changedAt?: Date;
}