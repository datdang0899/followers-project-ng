import { ModalComponent } from './../modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class TableModule {
}
TableModule.ɵfac = function TableModule_Factory(t) { return new (t || TableModule)(); };
TableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TableModule });
TableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableModule, [{
        type: NgModule,
        args: [{
                declarations: [ModalComponent],
                imports: [
                    CommonModule
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TableModule, { declarations: [ModalComponent], imports: [CommonModule] }); })();
//# sourceMappingURL=table.module.js.map