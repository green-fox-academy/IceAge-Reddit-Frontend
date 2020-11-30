import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/posts';

import { PostComponent } from './post.component';

class MockPostService {
  _posts: Post[] = [
    {
      id: 1,
      title: "PFirst Post",
      date_created: new Date(),
      subreddit: "Subreddit1",
      author: "Author1",
      commentCount: 2,
      post_type: "text",
      description: "Describing this first post."
    }
  ];

  getPost(postId: number): Post {
    const result = this._posts.find(post => post.id === postId);
    return result;
  }

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

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    component.postId = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
