import { Validators } from '@angular/forms';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "../titlecase.pipe";
function NewCourseComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, " name is required ");
    i0.ɵɵelementEnd();
} }
function NewCourseComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topic_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, topic_r2.value), " ");
} }
export class NewCourseComponent {
    constructor(fb) {
        this.form = fb.group({
            name: ['', Validators.required],
            contact: fb.group({
                email: [],
                phone: [],
            }),
            topics: fb.array([]),
        });
    }
    get topics() {
        return this.form.get('topics');
    }
    onSubmit(value) {
        console.log(value);
    }
}
NewCourseComponent.ɵfac = function NewCourseComponent_Factory(t) { return new (t || NewCourseComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
NewCourseComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NewCourseComponent, selectors: [["app-new-course"]], decls: 16, vars: 2, consts: [[3, "formGroup", "ngSubmit"], ["for", "name"], ["type", "text", "name", "name", "formControlName", "name", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["formGroupName", "contact", 1, "form-group"], ["for", "email"], ["type", "text", "name", "email", "formControlName", "email"], ["for", "phone"], ["type", "text", "name", "phone", "formControlName", "phone"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info"], [1, "alert", "alert-danger"]], template: function NewCourseComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("ngSubmit", function NewCourseComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(ctx.form.value); });
        i0.ɵɵelementStart(1, "label", 1);
        i0.ɵɵtext(2, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 2);
        i0.ɵɵtemplate(4, NewCourseComponent_div_4_Template, 2, 0, "div", 3);
        i0.ɵɵelementStart(5, "div", 4)(6, "label", 5);
        i0.ɵɵtext(7, "Email");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "input", 6);
        i0.ɵɵelementStart(9, "label", 7);
        i0.ɵɵtext(10, "Phone");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "ul");
        i0.ɵɵtemplate(13, NewCourseComponent_li_13_Template, 3, 3, "li", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "button", 10);
        i0.ɵɵtext(15, "submit");
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("ngForOf", ctx.topics.controls);
    } }, dependencies: [i2.NgForOf, i2.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, i3.TitlecasePipe] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewCourseComponent, [{
        type: Component,
        args: [{ selector: 'app-new-course', template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\n  <label for=\"name\">Name</label>\n  <input type=\"text\" name=\"name\" formControlName=\"name\" class=\"form-control\" />\n  <div *ngIf=\"\" class=\"alert alert-danger\">\n    name is required\n  </div>\n  <div class=\"form-group\" formGroupName=\"contact\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" formControlName=\"email\" />\n    <label for=\"phone\">Phone</label>\n    <input type=\"text\" name=\"phone\" formControlName=\"phone\" />\n  </div>\n  <ul>\n    <li *ngFor=\"let topic of topics.controls\">\n      {{ topic.value | titlecase }}\n    </li>\n  </ul>\n  <button class=\"btn btn-info\">submit</button>\n</form>\n" }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=new-course.component.js.map