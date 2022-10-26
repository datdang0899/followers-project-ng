import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class BlogArchiveComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.year = params.get('year');
            this.tag = params.get('tag');
        });
    }
    onSubmit() {
        this.router.navigate(['/']);
    }
}
BlogArchiveComponent.ɵfac = function BlogArchiveComponent_Factory(t) { return new (t || BlogArchiveComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); };
BlogArchiveComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BlogArchiveComponent, selectors: [["app-blog-archive"]], decls: 4, vars: 2, consts: [[1, "btn", "btn-info", 3, "click"]], template: function BlogArchiveComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h3");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 0);
        i0.ɵɵlistener("click", function BlogArchiveComponent_Template_button_click_2_listener() { return ctx.onSubmit(); });
        i0.ɵɵtext(3, "view all");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate2("the archive for ", ctx.year, " / ", ctx.tag, "");
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BlogArchiveComponent, [{
        type: Component,
        args: [{ selector: 'app-blog-archive', template: "<h3>the archive for {{ year }} / {{ tag }}</h3>\n<button class=\"btn btn-info\" (click)=\"onSubmit()\">view all</button>\n" }]
    }], function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=blog-archive.component.js.map