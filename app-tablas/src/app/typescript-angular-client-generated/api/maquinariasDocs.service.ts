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

import { CreateMaquinariaDocDto } from '../model/createMaquinariaDocDto';
import { MaquinariaDocDto } from '../model/maquinariaDocDto';
import { MaquinariaDocDtoPaginatedResult } from '../model/maquinariaDocDtoPaginatedResult';
import { MaquinariaDocOneDto } from '../model/maquinariaDocOneDto';
import { ProblemDetails } from '../model/problemDetails';
import { UpdateMaquinariaDocDto } from '../model/updateMaquinariaDocDto';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class MaquinariasDocsService {

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
     * @param claveGuid 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV2MaquinariaDocClaveGuidDelete(claveGuid: string, observe?: 'body', reportProgress?: boolean): Observable<MaquinariaDocDto>;
    public apiV2MaquinariaDocClaveGuidDelete(claveGuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MaquinariaDocDto>>;
    public apiV2MaquinariaDocClaveGuidDelete(claveGuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MaquinariaDocDto>>;
    public apiV2MaquinariaDocClaveGuidDelete(claveGuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (claveGuid === null || claveGuid === undefined) {
            throw new Error('Required parameter claveGuid was null or undefined when calling apiV2MaquinariaDocClaveGuidDelete.');
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

        return this.httpClient.request<MaquinariaDocDto>('delete',`${this.basePath}/api/v2/maquinariaDoc/${encodeURIComponent(String(claveGuid))}`,
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
    public apiV2MaquinariaDocClaveGuidGet(claveGuid: string, observe?: 'body', reportProgress?: boolean): Observable<MaquinariaDocOneDto>;
    public apiV2MaquinariaDocClaveGuidGet(claveGuid: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MaquinariaDocOneDto>>;
    public apiV2MaquinariaDocClaveGuidGet(claveGuid: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MaquinariaDocOneDto>>;
    public apiV2MaquinariaDocClaveGuidGet(claveGuid: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (claveGuid === null || claveGuid === undefined) {
            throw new Error('Required parameter claveGuid was null or undefined when calling apiV2MaquinariaDocClaveGuidGet.');
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

        return this.httpClient.request<MaquinariaDocOneDto>('get',`${this.basePath}/api/v2/maquinariaDoc/${encodeURIComponent(String(claveGuid))}`,
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
    public apiV2MaquinariaDocGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'body', reportProgress?: boolean): Observable<MaquinariaDocDtoPaginatedResult>;
    public apiV2MaquinariaDocGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MaquinariaDocDtoPaginatedResult>>;
    public apiV2MaquinariaDocGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MaquinariaDocDtoPaginatedResult>>;
    public apiV2MaquinariaDocGet(Q?: string, sort?: string, page?: number, pageSize?: number, filters?: { [key: string]: string; }, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






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

        return this.httpClient.request<MaquinariaDocDtoPaginatedResult>('get',`${this.basePath}/api/v2/maquinariaDoc`,
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
    public apiV2MaquinariaDocPost(body?: CreateMaquinariaDocDto, observe?: 'body', reportProgress?: boolean): Observable<MaquinariaDocDto>;
    public apiV2MaquinariaDocPost(body?: CreateMaquinariaDocDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MaquinariaDocDto>>;
    public apiV2MaquinariaDocPost(body?: CreateMaquinariaDocDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MaquinariaDocDto>>;
    public apiV2MaquinariaDocPost(body?: CreateMaquinariaDocDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<MaquinariaDocDto>('post',`${this.basePath}/api/v2/maquinariaDoc`,
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
    public apiV2MaquinariaDocPut(body?: UpdateMaquinariaDocDto, observe?: 'body', reportProgress?: boolean): Observable<MaquinariaDocOneDto>;
    public apiV2MaquinariaDocPut(body?: UpdateMaquinariaDocDto, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<MaquinariaDocOneDto>>;
    public apiV2MaquinariaDocPut(body?: UpdateMaquinariaDocDto, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<MaquinariaDocOneDto>>;
    public apiV2MaquinariaDocPut(body?: UpdateMaquinariaDocDto, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<MaquinariaDocOneDto>('put',`${this.basePath}/api/v2/maquinariaDoc`,
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
