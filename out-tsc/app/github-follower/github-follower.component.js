import { combineLatest, switchMap } from 'rxjs';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./../service/github-follower.service";
import * as i3 from "@angular/common";
const _c0 = function (a1, a2) { return ["/followers", a1, a2]; };
function GithubFollowerComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 3);
    i0.ɵɵelement(1, "img", 4);
    i0.ɵɵelementStart(2, "div", 5)(3, "a", 6);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const follower_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", follower_r1.avatar_url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(5, _c0, follower_r1.id, follower_r1.login));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(follower_r1.login);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", follower_r1.html_url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(follower_r1.html_url);
} }
export class GithubFollowerComponent {
    constructor(route, githubService) {
        this.route = route;
        this.githubService = githubService;
    }
    ngOnInit() {
        combineLatest([this.route.paramMap, this.route.queryParamMap])
            .pipe(switchMap((combined) => {
            let id = combined[0].get('id');
            let page = combined[1].get('page');
            return this.githubService.getAll();
        }))
            .subscribe((followers) => {
            this.followers = followers;
        });
    }
}
GithubFollowerComponent.ɵfac = function GithubFollowerComponent_Factory(t) { return new (t || GithubFollowerComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.GithubFollowerService)); };
GithubFollowerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GithubFollowerComponent, selectors: [["app-github-follower"]], decls: 5, vars: 1, consts: [[1, "container-fluid"], [1, "list-group"], ["class", "card d-flex flex-row align-items-center list-group-item", 4, "ngFor", "ngForOf"], [1, "card", "d-flex", "flex-row", "align-items-center", "list-group-item"], ["alt", "", 1, "card-img-left", 3, "src"], [1, "card-body"], [1, "card-title", "d-block", 3, "routerLink"], ["target", "_blank", 1, "card-text", 3, "href"]], template: function GithubFollowerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0)(1, "h2");
        i0.ɵɵtext(2, "My Followers :");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "ul", 1);
        i0.ɵɵtemplate(4, GithubFollowerComponent_li_4_Template, 7, 8, "li", 2);
        i0.ɵɵelementEnd()();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.followers);
    } }, dependencies: [i3.NgForOf, i1.RouterLinkWithHref], styles: [".card-img-left[_ngcontent-%COMP%]{\r\n    height: 80px ; \r\n    width : 80px ; \r\n    border-radius: 100% ; \r\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GithubFollowerComponent, [{
        type: Component,
        args: [{ selector: 'app-github-follower', template: "<div class=\"container-fluid\">\n  <h2>My Followers :</h2>\n  <ul class=\"list-group\">\n    <li\n      *ngFor=\"let follower of followers\"\n      class=\"card d-flex flex-row align-items-center list-group-item\"\n    >\n      <img [src]=\"follower.avatar_url\" alt=\"\" class=\"card-img-left\" />\n      <div class=\"card-body\">\n        <a [routerLink]=\"['/followers',follower.id,follower.login]\" class=\"card-title d-block\">{{ follower.login }}</a>\n        <a [href]=\"follower.html_url\" class=\"card-text\" target=\"_blank\">{{ follower.html_url }}</a>\n      </div>\n    </li>\n  </ul>\n</div>\n", styles: [".card-img-left{\r\n    height: 80px ; \r\n    width : 80px ; \r\n    border-radius: 100% ; \r\n}\r\n\r\n"] }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.GithubFollowerService }]; }, null); })();
//# sourceMappingURL=github-follower.component.js.map