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
import { CentrosCoste } from './centrosCoste';
import { EmpresaDto } from './empresaDto';

export interface BidoneDto { 
    id?: number;
    idEmpresa?: number;
    empresa?: EmpresaDto;
    idCentro?: number;
    centro?: CentrosCoste;
    nombre?: string;
    numeroCuenta?: string;
    numeroTarjeta?: string;
    tipoCombustible?: string;
    createdBy: string;
    createdAt?: Date;
    changedBy: string;
    changedAt?: Date;
}