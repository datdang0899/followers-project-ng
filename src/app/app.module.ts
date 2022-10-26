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

@NgModule({
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
        path : 'archives/:year/:tag',
        component : BlogArchiveComponent
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
})
export class AppModule {}
