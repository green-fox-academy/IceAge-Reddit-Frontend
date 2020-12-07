import { ComponentFixture, TestBed } from '@angular/core/testing';
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

    getPost(postId: number): Post {
        const result = this._posts.find((post) => post.id === postId);
        return result;
    }
}

describe('PostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;
    let h2PostTitle: HTMLElement;
    let divPostDateCreated: HTMLElement;
    let aPostAuthor: HTMLElement;
    let aPostSubreddit: HTMLElement;
    let divPostCommentCount: HTMLElement;

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
        h2PostTitle = fixture.nativeElement.querySelector('h2');
        divPostDateCreated = fixture.nativeElement.querySelector('.postDateCreated');
        aPostAuthor = fixture.nativeElement.querySelector('.postAuthor');
        aPostSubreddit = fixture.nativeElement.querySelector('.postSubreddit');
        divPostCommentCount = fixture.nativeElement.querySelector('.postCommentCount');

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('postId should be 1', () => {
        expect(component.postId).toBe(1);
    });

    it('postTitle should be "First Post"', () => {
        expect(component.postTitle).toBe('First Post');
    });

    it('postDateCreated should be "2020-11-11T23:28:56.782Z"', () => {
        const date = new Date('2020-11-11T23:28:56.782Z');
        expect(component.postDateCreated).toEqual(date);
    });

    it('postAuthor should be "Author1"', () => {
        expect(component.postAuthor).toBe('Author1');
    });

    it('postSubreddit should be "Subreddit1"', () => {
        expect(component.postSubreddit).toBe('Subreddit1');
    });

    it('postCommentCount should be 2', () => {
        expect(component.postCommentCount).toBe(2);
    });

    it('Should display post title', () => {
        expect(h2PostTitle.textContent).toContain(component.postTitle);
    });

    it('Should display post dateCreated', () => {
        const datePipe = new DateAgoPipe();
        expect(divPostDateCreated.textContent).toContain(
            datePipe.transform(component.postDateCreated.toString()),
        );
    });

    it('Should display post author', () => {
        expect(aPostAuthor.textContent).toContain(component.postAuthor);
    });

    it('Should display post subreddit', () => {
        expect(aPostSubreddit.textContent).toContain(component.postSubreddit);
    });

    it('Should display post commentCount', () => {
        expect(divPostCommentCount.textContent).toContain(component.postCommentCount.toString());
    });
});
