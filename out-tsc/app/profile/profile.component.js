import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 0, template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "profile works!");
        i0.ɵɵelementEnd();
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-profile', template: "<p>profile works!</p>\n" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=profile.component.js.map