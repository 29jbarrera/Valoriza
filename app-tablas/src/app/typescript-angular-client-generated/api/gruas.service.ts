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

import { CreateGruaDto } from '../model/createGruaDto';
import { CreateGruasDocDto } from '../model/createGruasDocDto';
import { GruaDto } from '../model/gruaDto';
import { GruaDtoPaginatedResult } from '../model/gruaDtoPaginatedResult';
import { GruasDocDto } from '../model/gruasDocDto';
import { GruasDocDtoPaginatedResult } from '../model/gruasDocDtoPaginatedResult';
import { GruasDocOneDto } from '../model/gruasDocOneDto';
import { ProblemDetails } from '../model/problemDetails';
import { UpdateGruaDto } from '../model/updateGruaDto';
import { UpdateGruasDocDto } from '../model/updateGruasDocDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class GruasService {

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
    public apiV2GruaGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'body', reportProgress?: boolean): Observable<GruaDtoPaginatedResult>;
    public apiV2GruaGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GruaDtoPaginatedResult>>;
    public apiV2GruaGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GruaDtoPaginatedResult>>;
    public apiV2GruaGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






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

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

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

        return this.httpClient.request<GruaDtoPaginatedResult>('get',`${this.basePath}/api/v2/grua`,
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
    public apiV2GruaIdDelete(id: number, observe?: 'body', reportProgress?: boolean): Observable<GruaDto>;
    public apiV2GruaIdDelete(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GruaDto>>;
    public apiV2GruaIdDelete(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GruaDto>>;
    public apiV2GruaIdDelete(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiV2GruaIdDelete.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

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

        return this.httpClient.request<GruaDto>('delete',`${this.basePath}/api/v2/grua/${encodeURIComponent(String(id))}`,
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
    public apiV2GruaIdGet(id: number, observe?: 'body', reportProgress?: boolean): Observable<GruaDto>;
    public apiV2GruaIdGet(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GruaDto>>;
    public apiV2GruaIdGet(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GruaDto>>;
    public apiV2GruaIdGet(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiV2GruaIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

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

        return this.httpClient.request<GruaDto>('get',`${this.basePath}/api/v2/grua/${encodeURIComponent(String(id))}`,
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
    public apiV2GruaPost(body?: CreateGruaDto, observe?: 'body', reportProgress?: boolean): Observable<GruaDto>;
    public apiV2GruaPost(body?: CreateGruaDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GruaDto>>;
    public apiV2GruaPost(body?: CreateGruaDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GruaDto>>;
    public apiV2GruaPost(body?: CreateGruaDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

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

        return this.httpClient.request<GruaDto>('post',`${this.basePath}/api/v2/grua`,
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
    public apiV2GruaPut(body?: UpdateGruaDto, observe?: 'body', reportProgress?: boolean): Observable<GruaDto>;
    public apiV2GruaPut(body?: UpdateGruaDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GruaDto>>;
    public apiV2GruaPut(body?: UpdateGruaDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GruaDto>>;
    public apiV2GruaPut(body?: UpdateGruaDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

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

        return this.httpClient.request<GruaDto>('put',`${this.basePath}/api/v2/grua`,
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
     * @param claveGuid 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2GruasDocClaveGuidDelete(claveGuid: string, observe?: 'body', reportProgress?: boolean): Observable<GruasDocDto>;
    public apiV2GruasDocClaveGuidDelete(claveGuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GruasDocDto>>;
    public apiV2GruasDocClaveGuidDelete(claveGuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GruasDocDto>>;
    public apiV2GruasDocClaveGuidDelete(claveGuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (claveGuid === null || claveGuid === undefined) {
            throw new Error('Required parameter claveGuid was null or undefined when calling apiV2GruasDocClaveGuidDelete.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

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

        return this.httpClient.request<GruasDocDto>('delete',`${this.basePath}/api/v2/gruasDoc/${encodeURIComponent(String(claveGuid))}`,
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
     * @param claveGuid 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2GruasDocClaveGuidGet(claveGuid: string, observe?: 'body', reportProgress?: boolean): Observable<GruasDocOneDto>;
    public apiV2GruasDocClaveGuidGet(claveGuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GruasDocOneDto>>;
    public apiV2GruasDocClaveGuidGet(claveGuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GruasDocOneDto>>;
    public apiV2GruasDocClaveGuidGet(claveGuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (claveGuid === null || claveGuid === undefined) {
            throw new Error('Required parameter claveGuid was null or undefined when calling apiV2GruasDocClaveGuidGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

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

        return this.httpClient.request<GruasDocOneDto>('get',`${this.basePath}/api/v2/gruasDoc/${encodeURIComponent(String(claveGuid))}`,
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
     * @param Q 
     * @param sort 
     * @param page 
     * @param pageSize 
     * @param filters 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2GruasDocGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'body', reportProgress?: boolean): Observable<GruasDocDtoPaginatedResult>;
    public apiV2GruasDocGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GruasDocDtoPaginatedResult>>;
    public apiV2GruasDocGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GruasDocDtoPaginatedResult>>;
    public apiV2GruasDocGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






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

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

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

        return this.httpClient.request<GruasDocDtoPaginatedResult>('get',`${this.basePath}/api/v2/gruasDoc`,
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
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2GruasDocPost(body?: CreateGruasDocDto, observe?: 'body', reportProgress?: boolean): Observable<GruasDocOneDto>;
    public apiV2GruasDocPost(body?: CreateGruasDocDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GruasDocOneDto>>;
    public apiV2GruasDocPost(body?: CreateGruasDocDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GruasDocOneDto>>;
    public apiV2GruasDocPost(body?: CreateGruasDocDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

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

        return this.httpClient.request<GruasDocOneDto>('post',`${this.basePath}/api/v2/gruasDoc`,
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
    public apiV2GruasDocPut(body?: UpdateGruasDocDto, observe?: 'body', reportProgress?: boolean): Observable<GruasDocOneDto>;
    public apiV2GruasDocPut(body?: UpdateGruasDocDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GruasDocOneDto>>;
    public apiV2GruasDocPut(body?: UpdateGruasDocDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GruasDocOneDto>>;
    public apiV2GruasDocPut(body?: UpdateGruasDocDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

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

        return this.httpClient.request<GruasDocOneDto>('put',`${this.basePath}/api/v2/gruasDoc`,
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
