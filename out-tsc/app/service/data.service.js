import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { Inject, Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DataService {
    constructor(url, http) {
        this.url = url;
        this.http = http;
    }
    getAll() {
        return this.http.get(this.url).pipe(map((response) => response), catchError(this.handleError));
    }
    update(resource) {
        return this.http
            .patch(this.url + '/' + resource.id, JSON.stringify({ title: resource }))
            .pipe(catchError(this.handleError));
    }
    create(resource) {
        return this.http
            .post(this.url, JSON.stringify(resource))
            .pipe(catchError(this.handleError));
    }
    delete(id) {
        return this.http.delete(this.url + '/' + id).pipe(map((response) => response), catchError(this.handleError));
    }
    handleError(error) {
        if (error.status === 404)
            return throwError(new AppError(error));
        if (error.status === 400)
            return throwError(new BadInput(error.json()));
        return throwError(new AppError(error));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(i0.ɵɵinject(String), i0.ɵɵinject(i1.HttpClient)); };
DataService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [String]
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data.service.js.map