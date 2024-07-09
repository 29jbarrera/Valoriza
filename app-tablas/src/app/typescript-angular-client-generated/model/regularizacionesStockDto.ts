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
import { EmpresaDto } from './empresaDto';
import { ReferenciasMaterialeDto } from './referenciasMaterialeDto';
import { XCentrosCosteDto } from './xCentrosCosteDto';

export interface RegularizacionesStockDto { 
    id?: number;
    idEmpresa?: number;
    empresa?: EmpresaDto;
    idCentro?: number;
    centro?: XCentrosCosteDto;
    idReferenciaMaterial?: number;
    referenciaMaterial?: ReferenciasMaterialeDto;
    codOperacion: string;
    cantidad?: number;
    createdBy: string;
    createdAt?: Date;
    changedBy: string;
    changedAt?: Date;
}