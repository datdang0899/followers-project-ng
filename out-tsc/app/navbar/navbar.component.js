import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = function () { return { page: "1", order: "newest" }; };
export class NavbarComponent {
    constructor() {
        this.username = 1234;
    }
    ngOnInit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 13, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active current", 1, "nav-item"], ["routerLink", "/posts", 1, "nav-link"], ["routerLink", "/followers", 1, "nav-link", 3, "queryParams"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0)(1, "a", 1);
        i0.ɵɵtext(2, "Home");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵelement(4, "span", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 4)(6, "ul", 5)(7, "li", 6)(8, "a", 7);
        i0.ɵɵtext(9, "posts");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(10, "li", 6)(11, "a", 8);
        i0.ɵɵtext(12, "followers");
        i0.ɵɵelementEnd()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(1, _c0));
    } }, dependencies: [i1.RouterLinkWithHref, i1.RouterLinkActive] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'app-navbar', template: "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Home</a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li routerLinkActive=\"active current\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/posts\">posts</a>\n      </li>\n      <li routerLinkActive=\"active current\" class=\"nav-item\">\n        <a\n          class=\"nav-link\"\n          routerLink=\"/followers\"\n          [queryParams]=\"{\n            page: '1',\n            order: 'newest'\n          }\"\n          >followers</a\n        >\n      </li>\n    </ul>\n  </div>\n</nav>\n" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=navbar.component.js.map