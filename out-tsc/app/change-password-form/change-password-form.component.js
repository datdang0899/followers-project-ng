import { passwordValidations } from './password.validators';
import { Validators, } from '@angular/forms';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function ChangePasswordFormComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " old password is required ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordFormComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "old password is invalid");
    i0.ɵɵelementEnd();
} }
function ChangePasswordFormComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ChangePasswordFormComponent_div_5_div_1_Template, 2, 0, "div", 7);
    i0.ɵɵtemplate(2, ChangePasswordFormComponent_div_5_div_2_Template, 2, 0, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.oldPassword.hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.oldPassword.hasError("pwValid"));
} }
function ChangePasswordFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "checking match old password...");
    i0.ɵɵelementEnd();
} }
function ChangePasswordFormComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " new password is required ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordFormComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " new password match old password ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordFormComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ChangePasswordFormComponent_div_11_div_1_Template, 2, 0, "div", 7);
    i0.ɵɵtemplate(2, ChangePasswordFormComponent_div_11_div_2_Template, 2, 0, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.newPassword.hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.newPassword.hasError("matchOldPassword"));
} }
function ChangePasswordFormComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "checking password is confirm .");
    i0.ɵɵelementEnd();
} }
function ChangePasswordFormComponent_div_17_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " password don't match . ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordFormComponent_div_17_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " confirm password is required ");
    i0.ɵɵelementEnd();
} }
function ChangePasswordFormComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtemplate(1, ChangePasswordFormComponent_div_17_div_1_Template, 2, 0, "div", 7);
    i0.ɵɵtemplate(2, ChangePasswordFormComponent_div_17_div_2_Template, 2, 0, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.confirmPassword.valid && ctx_r4.form.hasError("confirmPasswordInvalid"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.confirmPassword.hasError("required"));
} }
export class ChangePasswordFormComponent {
    constructor(fb) {
        this.form = fb.group({
            oldPassword: [
                '',
                [Validators.required, passwordValidations.passwordIsValid],
            ],
            newPassword: [
                '',
                [Validators.required],
                [passwordValidations.checkPassword],
            ],
            confirmPassword: ['', [Validators.required]],
        }, { validator: passwordValidations.confirmPassword });
    }
    get oldPassword() {
        return this.form.get('oldPassword');
    }
    get newPassword() {
        return this.form.get('newPassword');
    }
    get confirmPassword() {
        return this.form.get('confirmPassword');
    }
}
ChangePasswordFormComponent.ɵfac = function ChangePasswordFormComponent_Factory(t) { return new (t || ChangePasswordFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
ChangePasswordFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChangePasswordFormComponent, selectors: [["app-change-password-form"]], decls: 20, vars: 6, consts: [[1, "w-25", "mx-auto", 3, "formGroup"], [1, "form-group"], ["for", "oldPassword"], ["type", "password", "name", "oldPassword", "formControlName", "oldPassword", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "newPassword"], ["type", "password", "name", "newPassword", "formControlName", "newPassword", 1, "form-control"], [4, "ngIf"], ["for", "confirmPassword"], ["type", "password", "name", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control"], [1, "btn", "btn-warning"], [1, "alert", "alert-danger"]], template: function ChangePasswordFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "label", 2);
        i0.ɵɵtext(3, "old password");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 3);
        i0.ɵɵtemplate(5, ChangePasswordFormComponent_div_5_Template, 3, 2, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 1)(7, "label", 5);
        i0.ɵɵtext(8, "new password");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "input", 6);
        i0.ɵɵtemplate(10, ChangePasswordFormComponent_div_10_Template, 2, 0, "div", 7);
        i0.ɵɵtemplate(11, ChangePasswordFormComponent_div_11_Template, 3, 2, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 1)(13, "label", 8);
        i0.ɵɵtext(14, "confirm password");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(15, "input", 9);
        i0.ɵɵtemplate(16, ChangePasswordFormComponent_div_16_Template, 2, 0, "div", 7);
        i0.ɵɵtemplate(17, ChangePasswordFormComponent_div_17_Template, 3, 2, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "button", 10);
        i0.ɵɵtext(19, "submit");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.oldPassword.touched && ctx.oldPassword.invalid);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.newPassword.pending);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.newPassword.touched && ctx.newPassword.invalid);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.confirmPassword.pending);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.confirmPassword.touched && ctx.confirmPassword.invalid);
    } }, dependencies: [i2.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChangePasswordFormComponent, [{
        type: Component,
        args: [{ selector: 'app-change-password-form', template: "<form [formGroup]=\"form\" class=\"w-25 mx-auto\">\r\n  <div class=\"form-group\">\r\n    <label for=\"oldPassword\">old password</label>\r\n    <input\r\n      type=\"password\"\r\n      name=\"oldPassword\"\r\n      formControlName=\"oldPassword\"\r\n      class=\"form-control\"\r\n    />\r\n    <div\r\n      *ngIf=\"oldPassword.touched && oldPassword.invalid\"\r\n      class=\"alert alert-danger\"\r\n    >\r\n      <div *ngIf=\"oldPassword.hasError('required')\">\r\n        old password is required\r\n      </div>\r\n      <div *ngIf=\"oldPassword.hasError('pwValid')\">old password is invalid</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"newPassword\">new password</label>\r\n    <input\r\n      type=\"password\"\r\n      name=\"newPassword\"\r\n      formControlName=\"newPassword\"\r\n      class=\"form-control\"\r\n    />\r\n    <div *ngIf=\"newPassword.pending\">checking match old password...</div>\r\n    <div\r\n      *ngIf=\"newPassword.touched && newPassword.invalid\"\r\n      class=\"alert alert-danger\"\r\n    >\r\n      <div *ngIf=\"newPassword.hasError('required')\">\r\n        new password is required\r\n      </div>\r\n\r\n      <div *ngIf=\"newPassword.hasError('matchOldPassword')\">\r\n        new password match old password\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirmPassword\">confirm password</label>\r\n    <input\r\n      type=\"password\"\r\n      name=\"confirmPassword\"\r\n      formControlName=\"confirmPassword\"\r\n      class=\"form-control\"\r\n    />\r\n    <div *ngIf=\"confirmPassword.pending\">checking password is confirm .</div>\r\n    <div\r\n      *ngIf=\"confirmPassword.touched && confirmPassword.invalid\"\r\n      class=\"alert alert-danger\"\r\n    >\r\n      <div\r\n        *ngIf=\"confirmPassword.valid && form.hasError('confirmPasswordInvalid')\"\r\n      >\r\n        password don't match .\r\n      </div>\r\n      <div *ngIf=\"confirmPassword.hasError('required')\">\r\n        confirm password is required\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button class=\"btn btn-warning\">submit</button>\r\n</form>\r\n" }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=change-password-form.component.js.map