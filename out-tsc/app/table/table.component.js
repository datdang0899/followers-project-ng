import { Component } from '@angular/core';
import { FormControl, Validators, } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function TableComponent_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(col_r8.title);
} }
function TableComponent_tr_10_td_1_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 37);
    i0.ɵɵlistener("click", function TableComponent_tr_10_td_1_i_2_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r16); const item_r9 = i0.ɵɵnextContext(2).$implicit; const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onEdit(item_r9.id)); });
    i0.ɵɵelementEnd();
} }
function TableComponent_tr_10_td_1_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 38);
    i0.ɵɵlistener("click", function TableComponent_tr_10_td_1_i_3_Template_i_click_0_listener() { i0.ɵɵrestoreView(_r19); const item_r9 = i0.ɵɵnextContext(2).$implicit; const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.onRemove(item_r9.id)); });
    i0.ɵɵelementEnd();
} }
function TableComponent_tr_10_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 34);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, TableComponent_tr_10_td_1_i_2_Template, 1, 0, "i", 35);
    i0.ɵɵtemplate(3, TableComponent_tr_10_td_1_i_3_Template, 1, 0, "i", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r11 = ctx.$implicit;
    const item_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r9[col_r11.path], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r11.content == "edit");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", col_r11.content == "remove");
} }
function TableComponent_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, TableComponent_tr_10_td_1_Template, 4, 3, "td", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r1.columns);
} }
function TableComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "name is required.");
    i0.ɵɵelementEnd();
} }
function TableComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, TableComponent_div_26_div_1_Template, 2, 0, "div", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.name.hasError("required"));
} }
function TableComponent_div_31_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " category is required. ");
    i0.ɵɵelementEnd();
} }
function TableComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, TableComponent_div_31_div_1_Template, 2, 0, "div", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.category.hasError("required"));
} }
function TableComponent_div_36_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " origin is required. ");
    i0.ɵɵelementEnd();
} }
function TableComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, TableComponent_div_36_div_1_Template, 2, 0, "div", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.origin.hasError("required"));
} }
function TableComponent_div_57_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "name is required.");
    i0.ɵɵelementEnd();
} }
function TableComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, TableComponent_div_57_div_1_Template, 2, 0, "div", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.name.hasError("required"));
} }
function TableComponent_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " category is required. ");
    i0.ɵɵelementEnd();
} }
function TableComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, TableComponent_div_62_div_1_Template, 2, 0, "div", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.category.hasError("required"));
} }
function TableComponent_div_67_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " origin is required. ");
    i0.ɵɵelementEnd();
} }
function TableComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, TableComponent_div_67_div_1_Template, 2, 0, "div", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.origin.hasError("required"));
} }
export class TableComponent {
    constructor(fb) {
        this.IdEdit = 0;
        this.IdAdd = 0;
        this.IdRemove = 0;
        this.lastId = 5;
        this.data = [
            {
                id: 1,
                name: 'iphone 14 pro max',
                category: 'smart phone',
                origin: 'United States',
            },
            {
                id: 2,
                name: 'oppo reno 7',
                category: 'smart phone',
                origin: 'Korean',
            },
            {
                id: 3,
                name: 'samsung j7 pro',
                category: 'smart phone',
                origin: 'Korean',
            },
            {
                id: 4,
                name: 'ipad air 2',
                category: 'tablet',
                origin: 'United States',
            },
            {
                id: 5,
                name: 'xiaomi redmi note 7',
                category: 'smart phone',
                origin: 'China',
            },
        ];
        this.columns = [
            {
                path: 'id',
                title: 'ID',
            },
            {
                path: 'name',
                title: 'Product Name',
            },
            {
                path: 'category',
                title: 'Category',
            },
            {
                path: 'origin',
                title: 'Origin',
            },
            {
                key: 'edit',
                content: 'edit',
            },
            {
                key: 'remove',
                content: 'remove',
            },
        ];
        this.form = fb.group({
            name: new FormControl('', [Validators.required]),
            category: new FormControl('', [Validators.required]),
            origin: new FormControl('', [Validators.required]),
        });
    }
    get name() {
        return this.form.get('name');
    }
    get category() {
        return this.form.get('category');
    }
    get origin() {
        return this.form.get('origin');
    }
    onEdit(id) {
        const index = this.data.findIndex((p) => p.id == id);
        const currentData = { ...this.data[index] };
        this.IdEdit = index;
        this.name.setValue(currentData.name);
        this.category.setValue(currentData.category);
        this.origin.setValue(currentData.origin);
    }
    onAdd() {
        this.name.setValue('');
        this.category.setValue('');
        this.origin.setValue('');
        this.name.touched = false;
        this.category.touched = false;
        this.origin.touched = false;
    }
    onRemove(id) {
        const index = this.data.findIndex((p) => p.id == id);
        this.IdRemove = index;
    }
    handleAdd() {
        const newProduct = {
            id: ++this.lastId,
            name: this.name.value,
            category: this.category.value,
            origin: this.origin.value,
        };
        this.data.push(newProduct);
    }
    handleEdit() {
        this.data[this.IdEdit].name = this.name.value;
        this.data[this.IdEdit].category = this.category.value;
        this.data[this.IdEdit].origin = this.origin.value;
    }
    handleRemove() {
        this.data = [
            ...this.data.slice(0, this.IdRemove),
            ...this.data.slice(this.IdRemove + 1),
        ];
    }
    onSubmitEdit(fdata) {
        console.log(fdata);
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
TableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableComponent, selectors: [["app-table"]], decls: 84, vars: 12, consts: [[1, "d-flex", "justify-content-between", "w-100", "mb-4", "align-items-center"], ["data-toggle", "modal", "data-target", "#modalAdd", 1, "btn", "btn-success", "font-weight-bold", 3, "click"], [1, "table"], ["scope", "col", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["id", "modalAdd", "tabindex", "-1", "role", "dialog", "aria-labelledby", "modalAddLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "modalAddLabel", 1, "modal-title", "text-uppercase"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "formControlName", "name", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "category"], ["type", "text", "name", "category", "formControlName", "category", 1, "form-control"], ["for", "origin"], ["type", "text", "name", "origin", "formControlName", "origin", 1, "form-control"], [1, "form-group", "d-flex", "justify-content-end", "mt-4"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["data-dismiss", "modal", 1, "btn", "btn-warning", "font-weight-bold", "ml-2", 3, "disabled", "click"], ["id", "editModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "editModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "editModalLabel", 1, "modal-title", "text-uppercase"], ["id", "removeModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "removeModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "removeModalLabel", 1, "modal-title", "text-uppercase", "text-center"], [1, "modal-body", "d-flex", "justify-content-around"], ["data-dismiss", "modal", 1, "btn", "btn-secondary"], ["data-dismiss", "modal", 1, "btn", "btn-danger", "font-weight-bold", 3, "click"], ["scope", "col"], ["scope", "row", 4, "ngFor", "ngForOf"], ["scope", "row"], ["class", "fa fa-pencil-square-o btn btn-outline-primary", "data-toggle", "modal", "data-target", "#editModal", 3, "click", 4, "ngIf"], ["class", "fa fa-trash btn btn-outline-danger", "data-toggle", "modal", "data-target", "#removeModal", 3, "click", 4, "ngIf"], ["data-toggle", "modal", "data-target", "#editModal", 1, "fa", "fa-pencil-square-o", "btn", "btn-outline-primary", 3, "click"], ["data-toggle", "modal", "data-target", "#removeModal", 1, "fa", "fa-trash", "btn", "btn-outline-danger", 3, "click"], [1, "alert", "alert-danger"], [4, "ngIf"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h4");
        i0.ɵɵtext(2, "Table product :");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵlistener("click", function TableComponent_Template_button_click_3_listener() { return ctx.onAdd(); });
        i0.ɵɵtext(4, " Add Product ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(5, "table", 2)(6, "thead")(7, "tr");
        i0.ɵɵtemplate(8, TableComponent_th_8_Template, 2, 1, "th", 3);
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(9, "tbody");
        i0.ɵɵtemplate(10, TableComponent_tr_10_Template, 2, 1, "tr", 4);
        i0.ɵɵelementStart(11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "div", 8)(15, "h5", 9);
        i0.ɵɵtext(16, " Add Product ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "button", 10)(18, "span", 11);
        i0.ɵɵtext(19, "\u00D7");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(20, "div", 12)(21, "form", 13)(22, "div", 14)(23, "label", 15);
        i0.ɵɵtext(24, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(25, "input", 16);
        i0.ɵɵtemplate(26, TableComponent_div_26_Template, 2, 1, "div", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "div", 14)(28, "label", 18);
        i0.ɵɵtext(29, "Category");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(30, "input", 19);
        i0.ɵɵtemplate(31, TableComponent_div_31_Template, 2, 1, "div", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "div", 14)(33, "label", 20);
        i0.ɵɵtext(34, "Origin");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(35, "input", 21);
        i0.ɵɵtemplate(36, TableComponent_div_36_Template, 2, 1, "div", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "div", 22)(38, "button", 23);
        i0.ɵɵtext(39, " cancel ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "button", 24);
        i0.ɵɵlistener("click", function TableComponent_Template_button_click_40_listener() { return ctx.handleAdd(); });
        i0.ɵɵtext(41, " Add Product ");
        i0.ɵɵelementEnd()()()()()()();
        i0.ɵɵelementStart(42, "div", 25)(43, "div", 6)(44, "div", 7)(45, "div", 8)(46, "h5", 26);
        i0.ɵɵtext(47, " Edit Product ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "button", 10)(49, "span", 11);
        i0.ɵɵtext(50, "\u00D7");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(51, "div", 12)(52, "form", 13)(53, "div", 14)(54, "label", 15);
        i0.ɵɵtext(55, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(56, "input", 16);
        i0.ɵɵtemplate(57, TableComponent_div_57_Template, 2, 1, "div", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(58, "div", 14)(59, "label", 18);
        i0.ɵɵtext(60, "Category");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(61, "input", 19);
        i0.ɵɵtemplate(62, TableComponent_div_62_Template, 2, 1, "div", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(63, "div", 14)(64, "label", 20);
        i0.ɵɵtext(65, "Origin");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(66, "input", 21);
        i0.ɵɵtemplate(67, TableComponent_div_67_Template, 2, 1, "div", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(68, "div", 22)(69, "button", 23);
        i0.ɵɵtext(70, " cancel ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(71, "button", 24);
        i0.ɵɵlistener("click", function TableComponent_Template_button_click_71_listener() { return ctx.handleEdit(); });
        i0.ɵɵtext(72, " Save Changes ");
        i0.ɵɵelementEnd()()()()()()();
        i0.ɵɵelementStart(73, "div", 27)(74, "div", 6)(75, "div", 7)(76, "div", 8)(77, "h5", 28);
        i0.ɵɵtext(78, " Are you sure you want to delete this product ? ");
        i0.ɵɵelementEnd()();
        i0.ɵɵelementStart(79, "div", 29)(80, "button", 30);
        i0.ɵɵtext(81, " cancel ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(82, "button", 31);
        i0.ɵɵlistener("click", function TableComponent_Template_button_click_82_listener() { return ctx.handleRemove(); });
        i0.ɵɵtext(83, " Delete ");
        i0.ɵɵelementEnd()()()()()()();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.columns);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.data);
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.name.touched && ctx.name.invalid);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.category.touched && ctx.category.invalid);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.origin.touched && ctx.origin.invalid);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.form.invalid);
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.name.touched && ctx.name.invalid);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.category.touched && ctx.category.invalid);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.origin.touched && ctx.origin.invalid);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("disabled", ctx.form.invalid);
    } }, dependencies: [i2.NgForOf, i2.NgIf, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableComponent, [{
        type: Component,
        args: [{ selector: 'app-table', template: "<div class=\"d-flex justify-content-between w-100 mb-4 align-items-center\">\n  <h4>Table product :</h4>\n  <button\n    class=\"btn btn-success font-weight-bold\"\n    data-toggle=\"modal\"\n    data-target=\"#modalAdd\"\n    (click)=\"onAdd()\"\n  >\n    Add Product\n  </button>\n</div>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th *ngFor=\"let col of columns\" scope=\"col\">{{ col.title }}</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of data\">\n      <td *ngFor=\"let col of columns\" scope=\"row\">\n        {{ item[col.path] }}\n        <i\n          *ngIf=\"col.content == 'edit'\"\n          class=\"fa fa-pencil-square-o btn btn-outline-primary\"\n          data-toggle=\"modal\"\n          data-target=\"#editModal\"\n          (click)=\"onEdit(item.id)\"\n        ></i>\n        <i\n          *ngIf=\"col.content == 'remove'\"\n          class=\"fa fa-trash btn btn-outline-danger\"\n          data-toggle=\"modal\"\n          data-target=\"#removeModal\"\n          (click)=\"onRemove(item.id)\"\n        ></i>\n      </td>\n    </tr>\n\n    <!-- modal of add -->\n\n    <div\n      class=\"modal fade\"\n      id=\"modalAdd\"\n      tabindex=\"-1\"\n      role=\"dialog\"\n      aria-labelledby=\"modalAddLabel\"\n      aria-hidden=\"true\"\n    >\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title text-uppercase\" id=\"modalAddLabel\">\n              Add Product\n            </h5>\n            <button\n              type=\"button\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              aria-label=\"Close\"\n            >\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <form [formGroup]=\"form\">\n              <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input\n                  type=\"text\"\n                  formControlName=\"name\"\n                  class=\"form-control\"\n                />\n                <div\n                  class=\"alert alert-danger\"\n                  *ngIf=\"name.touched && name.invalid\"\n                >\n                  <div *ngIf=\"name.hasError('required')\">name is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"category\">Category</label>\n                <input\n                  type=\"text\"\n                  name=\"category\"\n                  formControlName=\"category\"\n                  class=\"form-control\"\n                />\n                <div\n                  class=\"alert alert-danger\"\n                  *ngIf=\"category.touched && category.invalid\"\n                >\n                  <div *ngIf=\"category.hasError('required')\">\n                    category is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"origin\">Origin</label>\n                <input\n                  type=\"text\"\n                  name=\"origin\"\n                  formControlName=\"origin\"\n                  class=\"form-control\"\n                />\n                <div\n                  class=\"alert alert-danger\"\n                  *ngIf=\"origin.touched && origin.invalid\"\n                >\n                  <div *ngIf=\"origin.hasError('required')\">\n                    origin is required.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group d-flex justify-content-end mt-4\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-secondary\"\n                  data-dismiss=\"modal\"\n                >\n                  cancel\n                </button>\n                <button\n                  class=\"btn btn-warning font-weight-bold ml-2\"\n                  [disabled]=\"form.invalid\"\n                  (click)=\"handleAdd()\"\n                  data-dismiss=\"modal\"\n                >\n                  Add Product\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- modal of edit -->\n\n    <div\n      class=\"modal fade\"\n      id=\"editModal\"\n      tabindex=\"-1\"\n      role=\"dialog\"\n      aria-labelledby=\"editModalLabel\"\n      aria-hidden=\"true\"\n    >\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title text-uppercase\" id=\"editModalLabel\">\n              Edit Product\n            </h5>\n            <button\n              type=\"button\"\n              class=\"close\"\n              data-dismiss=\"modal\"\n              aria-label=\"Close\"\n            >\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            <form [formGroup]=\"form\">\n              <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input\n                  type=\"text\"\n                  formControlName=\"name\"\n                  class=\"form-control\"\n                />\n                <div\n                  class=\"alert alert-danger\"\n                  *ngIf=\"name.touched && name.invalid\"\n                >\n                  <div *ngIf=\"name.hasError('required')\">name is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"category\">Category</label>\n                <input\n                  type=\"text\"\n                  name=\"category\"\n                  formControlName=\"category\"\n                  class=\"form-control\"\n                />\n                <div\n                  class=\"alert alert-danger\"\n                  *ngIf=\"category.touched && category.invalid\"\n                >\n                  <div *ngIf=\"category.hasError('required')\">\n                    category is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"origin\">Origin</label>\n                <input\n                  type=\"text\"\n                  name=\"origin\"\n                  formControlName=\"origin\"\n                  class=\"form-control\"\n                />\n                <div\n                  class=\"alert alert-danger\"\n                  *ngIf=\"origin.touched && origin.invalid\"\n                >\n                  <div *ngIf=\"origin.hasError('required')\">\n                    origin is required.\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group d-flex justify-content-end mt-4\">\n                <button\n                  type=\"button\"\n                  class=\"btn btn-secondary\"\n                  data-dismiss=\"modal\"\n                >\n                  cancel\n                </button>\n\n                <button\n                  (click)=\"handleEdit()\"\n                  data-dismiss=\"modal\"\n                  class=\"btn btn-warning font-weight-bold ml-2\"\n                  [disabled]=\"form.invalid\"\n                >\n                  Save Changes\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- modal of remove -->\n\n    <div\n      class=\"modal fade\"\n      id=\"removeModal\"\n      tabindex=\"-1\"\n      role=\"dialog\"\n      aria-labelledby=\"removeModalLabel\"\n      aria-hidden=\"true\"\n    >\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5\n              class=\"modal-title text-uppercase text-center\"\n              id=\"removeModalLabel\"\n            >\n              Are you sure you want to delete this product ?\n            </h5>\n          </div>\n          <div class=\"modal-body d-flex justify-content-around\">\n            <button class=\"btn btn-secondary\" data-dismiss=\"modal\">\n              cancel\n            </button>\n            <button\n              class=\"btn btn-danger font-weight-bold\"\n              data-dismiss=\"modal\"\n              (click)=\"handleRemove()\"\n            >\n              Delete\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </tbody>\n</table>\n" }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=table.component.js.map