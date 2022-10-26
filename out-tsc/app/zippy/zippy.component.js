import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function ZippyComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "h4");
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd()();
} }
const _c0 = function (a0, a1) { return { "fa-chevron-down": a0, "fa-chevron-up": a1 }; };
const _c1 = ["*"];
export class ZippyComponent {
    constructor() {
        this.title = 'title';
        this.show = false;
    }
    showBody() {
        this.show = !this.show;
    }
}
ZippyComponent.ɵfac = function ZippyComponent_Factory(t) { return new (t || ZippyComponent)(); };
ZippyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ZippyComponent, selectors: [["app-zippy"]], inputs: { title: "title" }, ngContentSelectors: _c1, decls: 6, vars: 6, consts: [[1, "card", "card-pills"], [1, "card-header", "d-flex", "justify-content-between", 3, "click"], ["aria-hidden", "true", 1, "fa", 3, "ngClass"], ["class", "card-body", 4, "ngIf"], [1, "card-body"]], template: function ZippyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
        i0.ɵɵlistener("click", function ZippyComponent_Template_div_click_1_listener() { return ctx.showBody(); });
        i0.ɵɵelementStart(2, "h6");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "i", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, ZippyComponent_div_5_Template, 3, 0, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(ctx.title);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, !ctx.show, ctx.show));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.show);
    } }, dependencies: [i1.NgClass, i1.NgIf] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZippyComponent, [{
        type: Component,
        args: [{ selector: 'app-zippy', template: "<div class=\"card card-pills\">\n  <div class=\"card-header d-flex justify-content-between\" (click)=\"showBody()\">\n    <h6>{{ title }}</h6>\n    <i\n      class=\"fa\"\n      [ngClass]=\"{\n        'fa-chevron-down': !show,\n        'fa-chevron-up': show\n      }\"\n      aria-hidden=\"true\"\n    ></i>\n  </div>\n  <div class=\"card-body\" *ngIf=\"show\">\n    <h4>\n      <ng-content></ng-content>\n    </h4>\n  </div>\n</div>\n" }]
    }], function () { return []; }, { title: [{
            type: Input,
            args: ['title']
        }] }); })();
//# sourceMappingURL=zippy.component.js.map