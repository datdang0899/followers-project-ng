import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./../service/post.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function PostsComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4)(1, "button", 5);
    i0.ɵɵlistener("click", function PostsComponent_li_5_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const post_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); const _r0 = i0.ɵɵreference(3); return i0.ɵɵresetView(ctx_r3.updatePost(post_r2, _r0)); });
    i0.ɵɵtext(2, " update ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 6);
    i0.ɵɵlistener("click", function PostsComponent_li_5_Template_button_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const post_r2 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.deletePost(post_r2)); });
    i0.ɵɵtext(4, " delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", post_r2.title, " ");
} }
export class PostsComponent {
    constructor(service) {
        this.service = service;
        this.isAdd = true;
    }
    ngOnInit() {
        this.service.getAll().subscribe((response) => (this.posts = response), (error) => {
            throw error;
        });
    }
    updatePost(post, input) {
        input.control.setValue(post.title);
        this.isAdd = false;
        this.currentPost = post;
    }
    createPost(title) {
        let post = { title: title.value };
        title.reset();
        if (!this.isAdd) {
            this.isAdd = true;
            const index = this.posts.findIndex((p) => p['id'] == this.currentPost.id);
            this.posts[index].title = post.title;
            post.id = this.currentPost.id;
            this.service.update(post).subscribe((res) => { }, (error) => {
                if (error instanceof BadInput) {
                    // this.form.setErrors(error.json()) ;
                }
                else
                    throw error;
            });
        }
        else {
            this.posts.splice(0, 0, post);
            this.service.create(post).subscribe((response) => {
                post['id'] = response.id;
            }, (error) => {
                this.posts.splice(0, 1);
                if (error instanceof BadInput) {
                    //this.form.setErrors(error.json()) ;
                }
                else
                    throw error;
            });
        }
    }
    deletePost(post) {
        let postId = post.id;
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.delete(postId).subscribe(null, (error) => {
            this.posts.splice(index, 0, post);
            if (error instanceof NotFoundError) {
                alert('This post has already been deleted.');
            }
            else
                throw error;
        });
    }
}
PostsComponent.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(i0.ɵɵdirectiveInject(i1.PostService)); };
PostsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PostsComponent, selectors: [["app-posts"]], decls: 6, vars: 1, consts: [["type", "text", "placeholder", "Put title at here", "ngModel", "", 1, "form-control", "w-25", "mb-4", 3, "keyup.enter"], ["title", "ngModel"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", "mx-4", 3, "click"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "h2");
        i0.ɵɵtext(1, "list title posts :");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "input", 0, 1);
        i0.ɵɵlistener("keyup.enter", function PostsComponent_Template_input_keyup_enter_2_listener() { i0.ɵɵrestoreView(_r6); const _r0 = i0.ɵɵreference(3); return i0.ɵɵresetView(ctx.createPost(_r0)); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "ul", 2);
        i0.ɵɵtemplate(5, PostsComponent_li_5_Template, 6, 1, "li", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngForOf", ctx.posts);
    } }, dependencies: [i2.NgForOf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostsComponent, [{
        type: Component,
        args: [{ selector: 'app-posts', template: "<h2>list title posts :</h2>\n<input\n  type=\"text\"\n  placeholder=\"Put title at here\"\n  class=\"form-control w-25 mb-4\"\n  ngModel\n  #title=\"ngModel\"\n  (keyup.enter)=\"createPost(title)\"\n/>\n<ul class=\"list-group\">\n  <li *ngFor=\"let post of posts\" class=\"list-group-item\">\n    <button class=\"btn btn-success\" (click)=\"updatePost(post, title)\">\n      update\n    </button>\n    <button class=\"btn btn-danger mx-4\" (click)=\"deletePost(post)\">\n      delete\n    </button>\n    {{ post.title }}\n  </li>\n</ul>\n" }]
    }], function () { return [{ type: i1.PostService }]; }, null); })();
//# sourceMappingURL=posts.component.js.map