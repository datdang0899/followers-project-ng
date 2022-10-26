import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function ContactFormComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " First name is required ");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " First name should be 3 minimum 3 characters. ");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " First name doesn't match the pattern. ");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, ContactFormComponent_div_10_div_1_Template, 2, 0, "div", 19);
    i0.ɵɵtemplate(2, ContactFormComponent_div_10_div_2_Template, 2, 0, "div", 19);
    i0.ɵɵtemplate(3, ContactFormComponent_div_10_div_3_Template, 2, 0, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r2.hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r2.hasError("minlength"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r2.hasError("pattern"));
} }
function ContactFormComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "label", 14);
    i0.ɵɵelement(2, "input", 21);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const method_r10 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", method_r10.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", method_r10.name, " ");
} }
function ContactFormComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const method_r11 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", method_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", method_r11.name, " ");
} }
export class ContactFormComponent {
    constructor() {
        this.contactMethods = [
            {
                id: 1,
                name: 'Email',
            },
            {
                id: 2,
                name: 'Phone',
            },
        ];
    }
    log(x) {
        console.log(x);
    }
    onSubmit(f) {
        console.log(f);
    }
}
ContactFormComponent.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); };
ContactFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactFormComponent, selectors: [["app-contact-form"]], decls: 27, vars: 7, consts: [[1, "container"], [3, "submit"], ["f", "ngForm"], ["ngModelGroup", "contact"], ["contact", "ngModelGroup"], [1, "form-group"], ["for", "firstName"], ["required", "", "ngModel", "", "minlength", "3", "maxlength", "10", "pattern", "banana", "type", "text", "name", "firstName", 1, "form-control", 3, "change"], ["firstName", "ngModel"], ["class", "error alert alert-danger", 4, "ngIf"], ["for", "message"], ["ngModel", "", "name", "message", "cols", "30", "rows", "10", 1, "form-control"], ["message", "ngModel"], ["class", "radio", 4, "ngFor", "ngForOf"], ["for", "contactMethod"], ["name", "contactMethod", "ngModel", "", "id", "contactMethod", 1, "form-control"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "btn", "btn-success", 3, "disabled"], [1, "error", "alert", "alert-danger"], [4, "ngIf"], [1, "radio"], ["ngModel", "", "type", "radio", "name", "contactMethod", 3, "value"], [3, "ngValue"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0)(1, "form", 1, 2);
        i0.ɵɵlistener("submit", function ContactFormComponent_Template_form_submit_1_listener() { i0.ɵɵrestoreView(_r12); const _r0 = i0.ɵɵreference(2); return i0.ɵɵresetView(ctx.onSubmit(_r0)); });
        i0.ɵɵelementStart(3, "div", 3, 4)(5, "div", 5)(6, "label", 6);
        i0.ɵɵtext(7, "First Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "input", 7, 8);
        i0.ɵɵlistener("change", function ContactFormComponent_Template_input_change_8_listener() { i0.ɵɵrestoreView(_r12); const _r2 = i0.ɵɵreference(9); return i0.ɵɵresetView(ctx.log(_r2)); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, ContactFormComponent_div_10_Template, 4, 3, "div", 9);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(11, "div", 5)(12, "label", 10);
        i0.ɵɵtext(13, "Your message");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "textarea", 11, 12);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, ContactFormComponent_div_16_Template, 4, 2, "div", 13);
        i0.ɵɵelementStart(17, "div", 5)(18, "label", 14);
        i0.ɵɵtext(19, "Contact Method");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "select", 15);
        i0.ɵɵtemplate(21, ContactFormComponent_option_21_Template, 2, 2, "option", 16);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(22, "p");
        i0.ɵɵtext(23);
        i0.ɵɵpipe(24, "json");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "button", 17);
        i0.ɵɵtext(26, "Submit");
        i0.ɵɵelementEnd()()();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        const _r2 = i0.ɵɵreference(9);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("ngIf", _r2.touched && !_r2.valid);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.contactMethods);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.contactMethods);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(24, 5, _r0.value));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !_r0.valid);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.SelectControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.NgModel, i2.NgModelGroup, i2.NgForm, i1.JsonPipe] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactFormComponent, [{
        type: Component,
        args: [{ selector: 'app-contact-form', template: "<div class=\"container\">\n  <form #f=\"ngForm\" (submit)=\"onSubmit(f)\">\n    <div ngModelGroup=\"contact\" #contact=\"ngModelGroup\">\n      <div class=\"form-group\">\n        <label for=\"firstName\">First Name</label>\n        <input\n          required\n          ngModel\n          minlength=\"3\"\n          maxlength=\"10\"\n          pattern=\"banana\"\n          type=\"text\"\n          #firstName=\"ngModel\"\n          (change)=\"log(firstName)\"\n          name=\"firstName\"\n          class=\"form-control\"\n        />\n        <div\n          *ngIf=\"firstName.touched && !firstName.valid\"\n          class=\"error alert alert-danger\"\n        >\n          <div *ngIf=\"firstName.hasError('required')\">\n            First name is required\n          </div>\n          <div *ngIf=\"firstName.hasError('minlength')\">\n            First name should be 3 minimum 3 characters.\n          </div>\n          <div *ngIf=\"firstName.hasError('pattern')\">\n            First name doesn't match the pattern.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"message\">Your message</label\n      ><textarea\n        ngModel\n        #message=\"ngModel\"\n        name=\"message\"\n        cols=\"30\"\n        rows=\"10\"\n        class=\"form-control\"\n      ></textarea>\n    </div>\n\n    <div *ngFor=\"let method of contactMethods\" class=\"radio\">\n      <label for=\"contactMethod\">\n        <input ngModel type=\"radio\" name=\"contactMethod\" [value]=\"method.id\" />\n        {{ method.name }}\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contactMethod\">Contact Method</label>\n      <select\n        name=\"contactMethod\"\n        ngModel\n        id=\"contactMethod\"\n        class=\"form-control\"\n      >\n        <option *ngFor=\"let method of contactMethods\" [ngValue]=\"method\">\n          {{ method.name }}\n        </option>\n      </select>\n    </div>\n\n    <p>{{ f.value | json }}</p>\n    <button class=\"btn btn-success\" [disabled]=\"!f.valid\">Submit</button>\n  </form>\n</div>\n" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=contact-form.component.js.map