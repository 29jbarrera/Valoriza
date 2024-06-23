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

export interface CreateSubFamiliaDto { 
    idEmpresa?: number;
    idFamilia?: number;
    grua?: boolean;
    fichaTecnica?: boolean;
    inspeccionTecnica?: boolean;
    permisoCirculacion?: boolean;
    seguro?: boolean;
    tarjetaTransporte?: boolean;
    tacografo?: boolean;
    marcadoCe?: boolean;
    conformidad?: boolean;
    peso?: boolean;
    gnc?: boolean;
    createdBy?: string;
    createdAt?: Date;
    changedBy?: string;
    changedAt?: Date;
    idNivelMantenimientoChasis?: number;
    idNivelMantenimientoEquipo?: number;
    idNivelMantenimientoImplemento?: number;
    esImplemento?: boolean;
}