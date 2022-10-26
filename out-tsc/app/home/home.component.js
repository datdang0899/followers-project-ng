import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = function () { return ["/archives", 2022, 1]; };
const _c1 = function () { return ["/archives", 2022, 2]; };
const _c2 = function () { return ["/archives", 2022, 3]; };
export class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 6, consts: [[3, "routerLink"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "home page work!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ul")(3, "li")(4, "a", 0);
        i0.ɵɵtext(5, "2022/1");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(6, "li")(7, "a", 0);
        i0.ɵɵtext(8, "2022/2");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "li")(10, "a", 0);
        i0.ɵɵtext(11, "2022/3");
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(3, _c0));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(4, _c1));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(5, _c2));
    } }, dependencies: [i1.RouterLinkWithHref] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', template: "<h4>home page work!</h4>\n\n<ul>\n  <li><a [routerLink]=\"['/archives', 2022, 1]\">2022/1</a></li>\n  <li><a [routerLink]=\"['/archives', 2022, 2]\">2022/2</a></li>\n  <li><a [routerLink]=\"['/archives', 2022, 3]\">2022/3</a></li>\n</ul>\n" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=home.component.js.map