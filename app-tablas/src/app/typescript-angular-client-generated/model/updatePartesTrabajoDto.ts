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

export interface UpdatePartesTrabajoDto { 
    id?: number;
    idCentro?: number;
    idMaquinaria?: number;
    idEmpresa?: number;
    codEstado: string;
    codTipoMantenimiento?: string;
    codTipoActuacion?: string;
    nombre: string;
    fecha?: Date;
    fechaAveria?: Date;
    fechaFinalizacion?: Date;
    nombreConductor?: string;
    descripcionAveria?: string;
    trabajoRealizado?: string;
    horas?: number;
    kilometros?: number;
}