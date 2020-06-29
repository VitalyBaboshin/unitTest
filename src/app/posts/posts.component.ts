import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  template: `posts component`,
  selector: 'app-component'
})
export class PostsComponent implements OnInit {
  posts = [];
  message: string;

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.fetch().subscribe(p => {
      this.posts = p;
    });
  }

  add(title: string) {
    const post = { title };
    this.postsService.create(post).subscribe( (p) => {
      this.posts.push(p);
    }, err => this.message = err);
  }

  delete(id) {
    if (window.confirm('Are you sure?')) {
      this.postsService.remove(id).subscribe();
    }
  }
}
