import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { SubredditFormatPipe } from 'src/app/pipes/subreddit-format.pipe';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/posts';
import { PostComponent } from './post.component';

class MockPostService {
    _posts: Post[] = [
        {
            id: 1,
            title: 'First Post',
            date_created: new Date('2020-11-11T23:28:56.782Z'),
            subreddit: 'Subreddit1',
            author: 'Author1',
            commentCount: 2,
            post_type: 'text',
            description: 'Describing this first post.',
        },
    ];

    posts$: BehaviorSubject<Post[]> = new BehaviorSubject(this._posts);

    getPost(postId: number): Post {
        const result = this._posts.find((post) => post.id === postId);
        return result;
    }
}

const mockedPost: Post = {
    id: 1,
    title: 'First Post',
    date_created: new Date('2020-11-11T23:28:56.782Z'),
    subreddit: 'Subreddit1',
    author: 'Author1',
    commentCount: 2,
    post_type: 'text',
    description: 'Describing this first post.',
};

describe('PostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;
    let postService: PostService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PostComponent, DateAgoPipe, SubredditFormatPipe],
            providers: [{ provide: PostService, useClass: MockPostService }],
        }).compileComponents();
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

    it('should make a call to postService.getPost(postId) and call private method _setPropertiesFromPosts in ngOnInit', () => {
        let getPostSpy = spyOn(component['_postService'], 'getPost').and.callThrough();
        let setPropertiesFromPostsSpy = spyOn<any>(
            component,
            '_setPropertiesFromPosts',
        ).and.callThrough();
        component.ngOnInit();
        expect(getPostSpy).toHaveBeenCalledWith(component.postId);
        expect(setPropertiesFromPostsSpy).toHaveBeenCalledWith(component.post);
    });

    it('should test private method _setPropertiesFromPosts with parameter mockedPost', () => {
        component['_setPropertiesFromPosts'](mockedPost);
        expect(component.post).toBe(mockedPost);
        expect(component.postTitle).toBe(mockedPost.title);
        expect(component.postDateCreated).toEqual(mockedPost.date_created);
        expect(component.postAuthor).toBe(mockedPost.author);
        expect(component.postSubreddit).toBe(mockedPost.subreddit);
        expect(component.postCommentCount).toBe(mockedPost.commentCount);
    });
});
