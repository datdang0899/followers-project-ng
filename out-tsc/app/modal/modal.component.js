import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class ModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalComponent, selectors: [["app-modal"]], decls: 16, vars: 0, consts: [["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h5", 4);
        i0.ɵɵtext(5, "Modal title");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 5)(7, "span", 6);
        i0.ɵɵtext(8, "\u00D7");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵtext(10, "...");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 8)(12, "button", 9);
        i0.ɵɵtext(13, " Close ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "button", 10);
        i0.ɵɵtext(15, "Save changes");
        i0.ɵɵelementEnd()()()()();
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalComponent, [{
        type: Component,
        args: [{ selector: 'app-modal', template: "<div\n  class=\"modal fade\"\n  id=\"exampleModal\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">...</div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n          Close\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=modal.component.js.map