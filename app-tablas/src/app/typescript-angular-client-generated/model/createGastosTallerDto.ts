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

export interface CreateGastosTallerDto { 
    idEmpresa?: number;
    idCentro?: number;
    idProveedor?: number;
    idReferenciaMaterial?: number;
    fecha?: Date;
    factura?: string;
    descripcion?: string;
    importe?: number;
    codMoneda?: string;
    cantidad?: number;
    gastoConmutable?: boolean;
    createdBy?: string;
    createdAt?: Date;
    changedBy?: string;
    changedAt?: Date;
}