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

export interface UpdateTasasHistoricoDto { 
    id?: number;
    idCentro?: number;
    idMaquinaria?: number;
    idChasis?: number;
    fecha?: Date;
    tasaChasis?: number;
    codMonedaTasa?: string;
    idImplemento1?: number;
    modeloImplemento1?: string;
    tasaImplemento1?: number;
    codMonedaTasaImplemento1?: string;
    idImplemento2?: number;
    modeloImplemento2?: string;
    tasaImplemento2?: number;
    codMonedaTasaImplemento2?: string;
    idImplemento3?: number;
    modeloImplemento3?: string;
    tasaImplemento3?: number;
    codMonedaTasaImplemento3?: string;
    createdBy?: string;
    createdAt?: Date;
    changedBy?: string;
    changedAt?: Date;
}