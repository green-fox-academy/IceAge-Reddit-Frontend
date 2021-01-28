import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/posts';
import { Subreddit } from 'src/types/subreddits';
import { FeedComponent } from './feed.component';

const mockPosts: Post[] = [
    {
        id: 1,
        title: 'First post',
        date_created: new Date('2014-01-01T23:28:56.782Z'),
        subreddit: 'Subreddit1',
        author: 'Author1',
        commentCount: 2,
        post_type: 'text',
        description: 'Post about something',
    },
    {
        id: 2,
        title: 'Second post',
        date_created: new Date('2020-11-30T17:10:56.782Z'),
        subreddit: 'Subreddit2',
        author: 'Author2',
        commentCount: 3,
        post_type: 'url',
        posted_url: 'https://seznam.cz',
        description: 'Post about anything',
    },
];

const mockSubreddits: Subreddit[] = [
    {
        name: 'Subreddit1',
        title: 'Subreddit1 title',
        date_created: new Date('2020-11-11T23:28:56.782Z'),
        description: 'Describing this first subreddit.',
        userCount: 4,
        author: 'Author1',
        posts: [],
    },
    {
        name: 'Subreddit2',
        title: 'Subreddit1 title',
        date_created: new Date('2020-11-11T23:28:56.782Z'),
        description: 'Describing this first subreddit.',
        userCount: 4,
        author: 'Author1',
        posts: [],
    },
];

class MockPostService {
    posts$: BehaviorSubject<Post[]> = new BehaviorSubject(mockPosts);
    _posts: Post[];

    setPosts(posts: Post[]): void {
        this._posts = posts;
        this.posts$.next(posts);
    }
}

class MockGatewayService {
    getAllPosts(): Observable<Post[]> {
        return of(mockPosts);
    }

    getAllSubreddits(): Observable<Subreddit[]> {
        return of(mockSubreddits);
    }
}

fdescribe('FeedComponent', () => {
    let component: FeedComponent;
    let fixture: ComponentFixture<FeedComponent>;
    let postService: PostService;
    let gatewayService: GatewayService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowserModule, AppRoutingModule],
            declarations: [FeedComponent],
            providers: [
                { provide: PostService, useClass: MockPostService },
                { provide: GatewayService, useClass: MockGatewayService },
                HttpClientModule,
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        gatewayService = TestBed.inject(GatewayService);
        postService = TestBed.inject(PostService);
    });

    it('should create', () => {
        fixture = TestBed.createComponent(FeedComponent);
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('component _posts should equal to data from MockPostService', () => {
        fixture = TestBed.createComponent(FeedComponent);
        component = fixture.componentInstance;
        expect(component._posts).toEqual(mockPosts);
    });

    it('should call postService.setPosts(mockPosts)', () => {
        let setPostsSpy = spyOn(postService, 'setPosts').and.callThrough();
        fixture = TestBed.createComponent(FeedComponent);
        component = fixture.componentInstance;
        expect(setPostsSpy).toHaveBeenCalledWith(mockPosts);
    });

    it('should call gatewayService.getAllPosts() in constructor)', () => {
        let getAllPostsSpy = spyOn(gatewayService, 'getAllPosts').and.callThrough();
        fixture = TestBed.createComponent(FeedComponent);
        component = fixture.componentInstance;
        expect(getAllPostsSpy).toHaveBeenCalled();
    });

    it('should subscribe to postService.posts$ and set subscribed data to component._posts property', fakeAsync(() => {
        let getAllPostsSpy = spyOn(gatewayService, 'getAllPosts')
            .and.returnValue(of(mockPosts))
            .and.callThrough();
        let setPostsSpy = spyOn(postService, 'setPosts').and.callThrough();
        fixture = TestBed.createComponent(FeedComponent);
        component = fixture.componentInstance;
        expect(getAllPostsSpy).toHaveBeenCalled();
        expect(setPostsSpy).toHaveBeenCalled();
    }));
});
