import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./navbar/navbar.component";
export class AppComponent {
    constructor() {
        this.title = '';
        this.user = {
            name: 'dat dang',
            address: null,
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "app-navbar")(1, "router-outlet");
    } }, dependencies: [i1.RouterOutlet, i2.NavbarComponent] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<app-navbar></app-navbar> \r\n<router-outlet></router-outlet>\r\n\r\n<!-- <app-posts></app-posts> -->\r\n\r\n<!-- <app-github-follower></app-github-follower> -->\r\n" }]
    }], null, null); })();
//# sourceMappingURL=app.component.js.map