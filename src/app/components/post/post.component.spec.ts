import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/posts';

import { PostComponent } from './post.component';

// @Component({
//   selector: 'app-post',
//   template: `
//     <h2>{{postTitle}}</h2> <br> 
//     <div>Posted at {{postDateCreated}} by {{postAuthor}} to //{{postSubreddit}}</div> 
//     <div>{{postCommentCount}} Comments - <a href="">share</a></div>`
// })

// export class TestPostComponent {

  
// }

class MockPostService {
  posts: Post[] = [
    {
      id: 1,
      title: "První post",
      date_created: new Date(),
      subreddit: "Subreddit1",
      author: "Pepin",
      commentCount: 2,
      post_type: "text",
      description: "Post o ničem"
    },
    {
      id: 2,
      title: "Druhý post",
      date_created: new Date(),
      subreddit: "Subreddit2",
      author: "Pepinovič",
      commentCount: 3,
      post_type: "url",
      posted_url: "https://seznam.cz",
      description: "Post úplně o ničem"
    }
];

}

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ 
        PostComponent,
        {provide: PostService, useClass: MockPostService} ]
    })
    .compileComponents();

    component = TestBed.inject(PostComponent);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
