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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { CreateParteTrabajoMecanicoDto } from '../model/createParteTrabajoMecanicoDto';
import { ParteTrabajoMecanicoDto } from '../model/parteTrabajoMecanicoDto';
import { ParteTrabajoMecanicoDtoPaginatedResult } from '../model/parteTrabajoMecanicoDtoPaginatedResult';
import { ProblemDetails } from '../model/problemDetails';
import { UpdateParteTrabajoMecanicoDto } from '../model/updateParteTrabajoMecanicoDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ParteTrabajoMecanicoService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param Q 
     * @param sort 
     * @param page 
     * @param pageSize 
     * @param filters 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2ParteTrabajoMecanicoGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'body', reportProgress?: boolean): Observable<ParteTrabajoMecanicoDtoPaginatedResult>;
    public apiV2ParteTrabajoMecanicoGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ParteTrabajoMecanicoDtoPaginatedResult>>;
    public apiV2ParteTrabajoMecanicoGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ParteTrabajoMecanicoDtoPaginatedResult>>;
    public apiV2ParteTrabajoMecanicoGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (Q !== undefined && Q !== null) {
            queryParameters = queryParameters.set('Q', <any>Q);
        }
        if (sort !== undefined && sort !== null) {
            queryParameters = queryParameters.set('Sort', <any>sort);
        }
        if (page !== undefined && page !== null) {
            queryParameters = queryParameters.set('Page', <any>page);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('PageSize', <any>pageSize);
        }
        if (filters !== undefined && filters !== null) {
            queryParameters = queryParameters.set('Filters', <any>filters);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ParteTrabajoMecanicoDtoPaginatedResult>('get',`${this.basePath}/api/v2/ParteTrabajoMecanico`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2ParteTrabajoMecanicoIdDelete(id: number, observe?: 'body', reportProgress?: boolean): Observable<ParteTrabajoMecanicoDto>;
    public apiV2ParteTrabajoMecanicoIdDelete(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ParteTrabajoMecanicoDto>>;
    public apiV2ParteTrabajoMecanicoIdDelete(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ParteTrabajoMecanicoDto>>;
    public apiV2ParteTrabajoMecanicoIdDelete(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiV2ParteTrabajoMecanicoIdDelete.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ParteTrabajoMecanicoDto>('delete',`${this.basePath}/api/v2/ParteTrabajoMecanico/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2ParteTrabajoMecanicoIdGet(id: number, observe?: 'body', reportProgress?: boolean): Observable<ParteTrabajoMecanicoDto>;
    public apiV2ParteTrabajoMecanicoIdGet(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ParteTrabajoMecanicoDto>>;
    public apiV2ParteTrabajoMecanicoIdGet(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ParteTrabajoMecanicoDto>>;
    public apiV2ParteTrabajoMecanicoIdGet(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiV2ParteTrabajoMecanicoIdGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ParteTrabajoMecanicoDto>('get',`${this.basePath}/api/v2/ParteTrabajoMecanico/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2ParteTrabajoMecanicoPost(body?: CreateParteTrabajoMecanicoDto, observe?: 'body', reportProgress?: boolean): Observable<ParteTrabajoMecanicoDto>;
    public apiV2ParteTrabajoMecanicoPost(body?: CreateParteTrabajoMecanicoDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ParteTrabajoMecanicoDto>>;
    public apiV2ParteTrabajoMecanicoPost(body?: CreateParteTrabajoMecanicoDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ParteTrabajoMecanicoDto>>;
    public apiV2ParteTrabajoMecanicoPost(body?: CreateParteTrabajoMecanicoDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ParteTrabajoMecanicoDto>('post',`${this.basePath}/api/v2/ParteTrabajoMecanico`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2ParteTrabajoMecanicoPut(body?: UpdateParteTrabajoMecanicoDto, observe?: 'body', reportProgress?: boolean): Observable<ParteTrabajoMecanicoDto>;
    public apiV2ParteTrabajoMecanicoPut(body?: UpdateParteTrabajoMecanicoDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ParteTrabajoMecanicoDto>>;
    public apiV2ParteTrabajoMecanicoPut(body?: UpdateParteTrabajoMecanicoDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ParteTrabajoMecanicoDto>>;
    public apiV2ParteTrabajoMecanicoPut(body?: UpdateParteTrabajoMecanicoDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ParteTrabajoMecanicoDto>('put',`${this.basePath}/api/v2/ParteTrabajoMecanico`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
