import { NotFoundError } from './../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadInput } from './../common/bad-input';
import { PostService } from './../service/post.service';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  isAdd: boolean = true;
  posts: any;
  currentPost: any;

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe(
      (response) => (this.posts = response),
      (error: Response) => {
        throw error;
      }
    );
  }

  updatePost(post: any, input: NgModel) {
    input.control.setValue(post.title);
    this.isAdd = false;
    this.currentPost = post;
  }

  createPost(title: NgModel) {
    let post: any = { title: title.value };
    title.reset();

    if (!this.isAdd) {
      this.isAdd = true;
      const index = this.posts.findIndex(
        (p: any) => p['id'] == this.currentPost.id
      );
      this.posts[index].title = post.title;
      post.id = this.currentPost.id;

      this.service.update(post).subscribe(
        (res: any) => {},
        (error: Response) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.json()) ;
          } else throw error;
        }
      );
    } else {
      this.posts.splice(0, 0, post);

      this.service.create(post).subscribe(
        (response: any) => {
          post['id'] = response.id;
        },
        (error: Response) => {
          this.posts.splice(0, 1);
          if (error instanceof BadInput) {
            //this.form.setErrors(error.json()) ;
          } else throw error;
        }
      );
    }
  }

  deletePost(post: any) {
    let postId = post.id;
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(postId).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, post);
      if (error instanceof NotFoundError) {
        alert('This post has already been deleted.');
      } else throw error;
    });
  }
}
