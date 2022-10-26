import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./course.service";
import * as i2 from "@angular/common";
import * as i3 from "../sumary.pipe";
export class CourseComponent {
    constructor(service) {
        this.course = {
            title: 'all list of courses',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ea voluptatibus dolores nobis ipsam eos alias voluptate hic unde ex, maxime nisi placeat reprehenderit quasi minus assumenda deserunt, iusto perferendis!",
            rating: 4333,
            students: 30022,
            price: 15.99,
            releaseDate: new Date(),
        };
    }
    ngOnInit() { }
}
CourseComponent.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(i0.ɵɵdirectiveInject(i1.courseService)); };
CourseComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CourseComponent, selectors: [["app-course"]], decls: 15, vars: 18, template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "uppercase");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵtext(4);
        i0.ɵɵpipe(5, "number");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7);
        i0.ɵɵpipe(8, "date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10);
        i0.ɵɵpipe(11, "number");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "p");
        i0.ɵɵtext(13);
        i0.ɵɵpipe(14, "sumary");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 5, ctx.course.title));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 7, ctx.course.rating, "1.1-3"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(8, 10, ctx.course.releaseDate, "short"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(11, 13, ctx.course.students));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(14, 15, ctx.course.text, 60), " ");
    } }, dependencies: [i2.UpperCasePipe, i2.DecimalPipe, i2.DatePipe, i3.SumaryPipe] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourseComponent, [{
        type: Component,
        args: [{ selector: 'app-course', template: "<p>{{ course.title | uppercase }}</p>\n<p>{{ course.rating | number : \"1.1-3\"}}</p>\n<p>{{ course.releaseDate | date: \"short\" }}</p>\n<p>{{ course.students | number }}</p>\n<p>{{ course.text | sumary: 60}} </p>\n\n" }]
    }], function () { return [{ type: i1.courseService }]; }, null); })();
//# sourceMappingURL=course.component.js.map