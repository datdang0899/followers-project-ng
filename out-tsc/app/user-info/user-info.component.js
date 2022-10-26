import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class UserInfoComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() { }
}
UserInfoComponent.ɵfac = function UserInfoComponent_Factory(t) { return new (t || UserInfoComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
UserInfoComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserInfoComponent, selectors: [["app-user-info"]], decls: 2, vars: 0, template: function UserInfoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "user-info works!");
        i0.ɵɵelementEnd();
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserInfoComponent, [{
        type: Component,
        args: [{ selector: 'app-user-info', template: "<p>user-info works!</p>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=user-info.component.js.map