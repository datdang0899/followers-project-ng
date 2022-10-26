import { usernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function SignupFormComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, " The username or password is invalid ");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "checking for uniquenness...");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "username is required");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" username must contain at least ", ctx_r5.username.errors.minlength.requiredLength, " characters. ");
} }
function SignupFormComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " username isn't contain space ");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_10_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " username is already taken ");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, SignupFormComponent_div_10_div_1_Template, 2, 0, "div", 7);
    i0.ɵɵtemplate(2, SignupFormComponent_div_10_div_2_Template, 2, 1, "div", 7);
    i0.ɵɵtemplate(3, SignupFormComponent_div_10_div_3_Template, 2, 0, "div", 7);
    i0.ɵɵtemplate(4, SignupFormComponent_div_10_div_4_Template, 2, 0, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username.errors.minlength);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username.errors.cannotContainSpace);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username.errors.shouldBeUnique);
} }
function SignupFormComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, " password is required ");
    i0.ɵɵelementEnd();
} }
export class SignupFormComponent {
    constructor() {
        this.form = new FormGroup({
            account: new FormGroup({
                username: new FormControl('', [
                    Validators.required,
                    Validators.minLength(4),
                    usernameValidators.cannotContainSpace,
                ], usernameValidators.shouldBeUnique),
                password: new FormControl('', Validators.required),
            }),
        });
    }
    getFormControl(query) {
        return this.form.get(query);
    }
    get username() {
        return this.form.get("account.username");
    }
    get password() {
        return this.form.get("account.password");
    }
    login(data) {
        this.form.setErrors({
            invalidLogin: true,
        });
    }
}
SignupFormComponent.ɵfac = function SignupFormComponent_Factory(t) { return new (t || SignupFormComponent)(); };
SignupFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SignupFormComponent, selectors: [["app-signup-form"]], decls: 18, vars: 6, consts: [[1, "text-capitalize", "font-weight-bold", "text-center"], [1, "w-25", "mx-auto", 3, "formGroup", "ngSubmit"], ["formGroupName", "account"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["for", "username", 1, "font-weight-bold"], ["type", "text", "formControlName", "username", "name", "username", 1, "form-control"], [4, "ngIf"], ["for", "password", 1, "font-weight-bold"], ["type", "password", "formControlName", "password", "name", "password", 1, "form-control"], [1, "btn", "btn-info", "ml-auto", "d-flex", "text-capitalize", "font-weight-bold", 3, "disabled"], [1, "alert", "alert-danger"]], template: function SignupFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h2", 0);
        i0.ɵɵtext(1, "Sign up form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "form", 1);
        i0.ɵɵlistener("ngSubmit", function SignupFormComponent_Template_form_ngSubmit_2_listener() { return ctx.login(ctx.form.value); });
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtemplate(4, SignupFormComponent_div_4_Template, 2, 0, "div", 3);
        i0.ɵɵelementStart(5, "div", 4)(6, "label", 5);
        i0.ɵɵtext(7, "username");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "input", 6);
        i0.ɵɵtemplate(9, SignupFormComponent_div_9_Template, 2, 0, "div", 7);
        i0.ɵɵtemplate(10, SignupFormComponent_div_10_Template, 5, 4, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 4)(12, "label", 8);
        i0.ɵɵtext(13, "password");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "input", 9);
        i0.ɵɵtemplate(15, SignupFormComponent_div_15_Template, 2, 0, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "button", 10);
        i0.ɵɵtext(17, " sign up ");
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.form.errors);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.username.pending);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.username.touched && ctx.username.invalid);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.password.touched && ctx.password.invalid);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("disabled", ctx.form.invalid);
    } }, dependencies: [i1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i2.FormGroupName] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignupFormComponent, [{
        type: Component,
        args: [{ selector: 'app-signup-form', template: "<h2 class=\"text-capitalize font-weight-bold text-center\">Sign up form</h2>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"login(form.value)\" class=\"w-25 mx-auto\">\n  <div formGroupName=\"account\">\n    <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\n      The username or password is invalid\n    </div>\n    <div class=\"form-group\">\n      <label for=\"username\" class=\"font-weight-bold\">username</label>\n      <input\n        type=\"text\"\n        formControlName=\"username\"\n        name=\"username\"\n        class=\"form-control\"\n      />\n      <div *ngIf=\"username.pending\">checking for uniquenness...</div>\n      <div\n        *ngIf=\"username.touched && username.invalid\"\n        class=\"alert alert-danger\"\n      >\n        <div *ngIf=\"username.errors.required\">username is required</div>\n        <div *ngIf=\"username.errors.minlength\">\n          username must contain at least\n          {{ username.errors.minlength.requiredLength }} characters.\n        </div>\n        <div *ngIf=\"username.errors.cannotContainSpace\">\n          username isn't contain space\n        </div>\n        <div *ngIf=\"username.errors.shouldBeUnique\">\n          username is already taken\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\" class=\"font-weight-bold\">password</label>\n      <input\n        type=\"password\"\n        formControlName=\"password\"\n        name=\"password\"\n        class=\"form-control\"\n      />\n      <div\n        *ngIf=\"password.touched && password.invalid\"\n        class=\"alert alert-danger\"\n      >\n        password is required\n      </div>\n    </div>\n    <button\n      class=\"btn btn-info ml-auto d-flex text-capitalize font-weight-bold\"\n      [disabled]=\"form.invalid\"\n    >\n      sign up\n    </button>\n  </div>\n</form>\n" }]
    }], null, null); })();
//# sourceMappingURL=signup-form.component.js.map