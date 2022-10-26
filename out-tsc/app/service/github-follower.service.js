import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class GithubFollowerService extends DataService {
    constructor(http) {
        super('https://api.github.com/users/mosh-hamedani/followers', http);
    }
}
GithubFollowerService.ɵfac = function GithubFollowerService_Factory(t) { return new (t || GithubFollowerService)(i0.ɵɵinject(i1.HttpClient)); };
GithubFollowerService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: GithubFollowerService, factory: GithubFollowerService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubFollowerService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=github-follower.service.js.map