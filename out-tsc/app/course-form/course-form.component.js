import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function CourseFormComponent_div_7_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "name is required");
    i0.ɵɵelementEnd();
} }
function CourseFormComponent_div_7_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " name should be 5 minimun 5 characters ");
    i0.ɵɵelementEnd();
} }
function CourseFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, CourseFormComponent_div_7_p_1_Template, 2, 0, "p", 15);
    i0.ɵɵtemplate(2, CourseFormComponent_div_7_p_2_Template, 2, 0, "p", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(6);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.hasError("required"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.hasError("minlength"));
} }
function CourseFormComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", course_r8.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", course_r8.name, " ");
} }
function CourseFormComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1, "category is required");
    i0.ɵɵelementEnd();
} }
export class CourseFormComponent {
    constructor() {
        this.category = [
            {
                id: 1,
                name: 'Development',
            },
            {
                id: 2,
                name: 'Art',
            },
            {
                id: 3,
                name: 'Language',
            },
        ];
    }
    onSubmit(f) {
        console.log(f);
    }
}
CourseFormComponent.ɵfac = function CourseFormComponent_Factory(t) { return new (t || CourseFormComponent)(); };
CourseFormComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CourseFormComponent, selectors: [["app-course-form"]], decls: 24, vars: 7, consts: [["ngForm", "", 1, "w-25", "mx-auto", 3, "submit"], ["f", "ngForm"], [1, "form-group"], ["for", "nameGroup"], ["ngModel", "", "type", "text", "name", "Name", "required", "", "minlength", "5", "maxlength", "20", 1, "form-control"], ["name", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "selector"], ["name", "formSelect", "ngModel", "", "required", "", 1, "form-control"], ["cate", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "checkbox", "form-group"], ["type", "checkbox", "ngModel", "", "name", "isGuarantee"], [1, "btn", "btn-outline-success", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"]], template: function CourseFormComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "form", 0, 1);
        i0.ɵɵlistener("submit", function CourseFormComponent_Template_form_submit_0_listener() { i0.ɵɵrestoreView(_r9); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.onSubmit(_r0)); });
        i0.ɵɵelementStart(2, "div", 2)(3, "label", 3);
        i0.ɵɵtext(4, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "input", 4, 5);
        i0.ɵɵtemplate(7, CourseFormComponent_div_7_Template, 3, 2, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 7)(9, "h5");
        i0.ɵɵtext(10, "Category :");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "select", 8, 9);
        i0.ɵɵtemplate(13, CourseFormComponent_option_13_Template, 2, 2, "option", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, CourseFormComponent_div_14_Template, 2, 0, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div", 11)(16, "label");
        i0.ɵɵelement(17, "input", 12);
        i0.ɵɵtext(18, " 30-day money-back guarantee ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(19, "p");
        i0.ɵɵtext(20);
        i0.ɵɵpipe(21, "json");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "button", 13);
        i0.ɵɵtext(23, "submit");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        const _r1 = i0.ɵɵreference(6);
        const _r3 = i0.ɵɵreference(12);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngIf", _r1.touched && !_r1.valid);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.category);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", _r3.touched && !_r3.valid);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(21, 5, _r0.value), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", !_r0.valid);
    } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.NgModel, i2.NgForm, i1.JsonPipe] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourseFormComponent, [{
        type: Component,
        args: [{ selector: 'app-course-form', template: "<form ngForm #f=\"ngForm\" (submit)=\"onSubmit(f)\" class=\"w-25 mx-auto\">\n  <div class=\"form-group\">\n    <label for=\"nameGroup\">Name</label>\n    <input\n      ngModel\n      type=\"text\"\n      name=\"Name\"\n      #name=\"ngModel\"\n      required\n      minlength=\"5\"\n      maxlength=\"20\"\n      class=\"form-control\"\n    />\n    <div *ngIf=\"name.touched && !name.valid\" class=\"alert alert-danger\">\n      <p *ngIf=\"name.hasError('required')\">name is required</p>\n      <p *ngIf=\"name.hasError('minlength')\">\n        name should be 5 minimun 5 characters\n      </p>\n    </div>\n  </div>\n  <div class=\"selector\">\n    <h5>Category :</h5>\n    <select name=\"formSelect\" #cate=\"ngModel\" ngModel required  class=\"form-control\">\n      <option *ngFor=\"let course of category\"  [value]=\"course.id\">\n        {{ course.name }}\n      </option>\n    </select>\n    <div *ngIf=\"cate.touched && !cate.valid\" class=\"alert alert-danger\">category is required</div>\n  </div>\n  <div class=\"checkbox form-group\">\n    <label>\n      <input type=\"checkbox\" ngModel name=\"isGuarantee\" />\n      30-day money-back guarantee\n    </label>\n  </div>\n  <p>\n    {{ f.value | json }}\n  </p>\n  <button class=\"btn btn-outline-success\" [disabled]=\"!f.valid\">submit</button>\n</form>\n" }]
    }], null, null); })();
//# sourceMappingURL=course-form.component.js.map