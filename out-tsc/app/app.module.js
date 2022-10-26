import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SumaryPipe } from './sumary.pipe';
import { courseService } from './course/course.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { StarComponent } from './star/star.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitlecasePipe } from './titlecase.pipe';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { TableComponent } from './table/table.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { GithubFollowerComponent } from './github-follower/github-follower.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { BlogArchiveComponent } from './blog-archive/blog-archive.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        courseService,
        { provide: ErrorHandler, useClass: AppErrorHandler },
    ], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'followers/:id/:username',
                component: GithubProfileComponent,
            },
            {
                path: 'followers',
                component: GithubFollowerComponent,
            },
            {
                path: 'posts',
                component: PostsComponent,
            },
            {
                path: 'archives/:year/:tag',
                component: BlogArchiveComponent
            },
            {
                path: '**',
                component: NotfoundComponent,
            },
        ])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    CourseComponent,
                    SumaryPipe,
                    StarComponent,
                    TitleCaseComponent,
                    TitlecasePipe,
                    InputFormatDirective,
                    ZippyComponent,
                    ContactFormComponent,
                    CourseFormComponent,
                    TableComponent,
                    SignupFormComponent,
                    NewCourseComponent,
                    ChangePasswordFormComponent,
                    PostsComponent,
                    HomeComponent,
                    ProfileComponent,
                    NavbarComponent,
                    UserInfoComponent,
                    GithubFollowerComponent,
                    GithubProfileComponent,
                    BlogArchiveComponent,
                ],
                imports: [
                    BrowserModule,
                    AppRoutingModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    RouterModule.forRoot([
                        {
                            path: '',
                            component: HomeComponent,
                        },
                        {
                            path: 'followers/:id/:username',
                            component: GithubProfileComponent,
                        },
                        {
                            path: 'followers',
                            component: GithubFollowerComponent,
                        },
                        {
                            path: 'posts',
                            component: PostsComponent,
                        },
                        {
                            path: 'archives/:year/:tag',
                            component: BlogArchiveComponent
                        },
                        {
                            path: '**',
                            component: NotfoundComponent,
                        },
                    ]),
                ],
                providers: [
                    courseService,
                    { provide: ErrorHandler, useClass: AppErrorHandler },
                ],
                bootstrap: [AppComponent],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        CourseComponent,
        SumaryPipe,
        StarComponent,
        TitleCaseComponent,
        TitlecasePipe,
        InputFormatDirective,
        ZippyComponent,
        ContactFormComponent,
        CourseFormComponent,
        TableComponent,
        SignupFormComponent,
        NewCourseComponent,
        ChangePasswordFormComponent,
        PostsComponent,
        HomeComponent,
        ProfileComponent,
        NavbarComponent,
        UserInfoComponent,
        GithubFollowerComponent,
        GithubProfileComponent,
        BlogArchiveComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule, i1.RouterModule] }); })();
//# sourceMappingURL=app.module.js.map