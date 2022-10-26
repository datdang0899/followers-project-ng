import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class TitleCaseComponent {
    constructor() { }
    ngOnInit() {
    }
}
TitleCaseComponent.ɵfac = function TitleCaseComponent_Factory(t) { return new (t || TitleCaseComponent)(); };
TitleCaseComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TitleCaseComponent, selectors: [["app-title-case"]], decls: 2, vars: 0, template: function TitleCaseComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2");
        i0.ɵɵtext(1, "this is title case");
        i0.ɵɵelementEnd();
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TitleCaseComponent, [{
        type: Component,
        args: [{ selector: 'app-title-case', template: "<h2>this is title case</h2>" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=title-case.component.js.map