import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class StarComponent {
    constructor() {
        this.isActive = false;
    }
    togglerStar() {
        this.isActive = !this.isActive;
    }
    ngOnInit() {
    }
}
StarComponent.ɵfac = function StarComponent_Factory(t) { return new (t || StarComponent)(); };
StarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StarComponent, selectors: [["app-star"]], decls: 4, vars: 4, consts: [[1, "star-section", "m-5"], ["aria-hidden", "true", 1, "fa", 3, "click"]], template: function StarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h2");
        i0.ɵɵtext(2, "star section");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "i", 1);
        i0.ɵɵlistener("click", function StarComponent_Template_i_click_3_listener() { return ctx.togglerStar(); });
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵclassProp("fa-star-o", ctx.isActive)("fa-star", !ctx.isActive);
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StarComponent, [{
        type: Component,
        args: [{ selector: 'app-star', template: "<div class=\"star-section m-5\">\n  <h2>star section</h2>\n  <i\n    class=\"fa\"\n    [class.fa-star-o]=\"isActive\"\n    [class.fa-star]=\"!isActive\"\n    (click)=\"togglerStar()\"\n    aria-hidden=\"true\"\n  ></i>\n</div>\n" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=star.component.js.map