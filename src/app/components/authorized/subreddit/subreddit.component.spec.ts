import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { async, BehaviorSubject, Observable, of } from 'rxjs';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { Post } from 'src/types/posts';
import { SubredditComponent } from './subreddit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { routes } from 'src/app/app-routing.module';
import { Subreddit } from 'src/types/subreddits';
import { subscribeOn } from 'rxjs/operators';
import { PostComponent } from '../post/post.component';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { SubredditFormatPipe } from 'src/app/pipes/subreddit-format.pipe';

const testPosts: Post[] = [
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
    {
        id: 2,
        title: 'First Post',
        date_created: new Date('2020-11-11T23:28:56.782Z'),
        subreddit: 'Subreddit2',
        author: 'Author1',
        commentCount: 2,
        post_type: 'text',
        description: 'Describing this first post.',
    },
];

const testSubreddits: Subreddit[] = [
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
    _posts: Post[] = testPosts;
    _currentSubredditPosts: Post[];

    setCurrentSubredditPosts(postsList: Post[]): void {
        this._currentSubredditPosts = postsList;
    }

    getCurrentSubredditPosts(): Post[] {
        return this._currentSubredditPosts;
    }

    getPost(postId: number): Post {
        const result = this._posts.find((post) => post.id === postId);
        return result;
    }
}

class MockSubredditService {
    getAllSubreddits(): Subreddit[] {
        return testSubreddits;
    }
}

class MockGatewayService {
    getSubredditPostsFeedByName(subredditName: string): Observable<Post[]> {
        let postsArray: Post[] = [];
        let currentPost: Post = testPosts.find((post) => post.subreddit === subredditName);
        postsArray.push(currentPost);
        return of(postsArray);
    }
}

const mockActivatedRoute = {
    params: of({
        name: 'Subreddit1',
    }),
};

fdescribe('SubredditComponent', () => {
    let component: SubredditComponent;
    let activatedRoute: ActivatedRoute;
    let fixture: ComponentFixture<SubredditComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([
                    {
                        path: 'auth/feed/:name',
                        component: SubredditComponent,
                    },
                ]),
            ],
            declarations: [SubredditComponent, PostComponent, DateAgoPipe, SubredditFormatPipe],
            providers: [
                { provide: PostService, useClass: MockPostService },
                { provide: SubredditService, useClass: MockSubredditService },
                { provide: GatewayService, useClass: MockGatewayService },
                {
                    provide: ActivatedRoute,
                    useValue: mockActivatedRoute,
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SubredditComponent);
        component = fixture.componentInstance;
        activatedRoute = TestBed.inject(ActivatedRoute);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should test route parameters using Activated routes', fakeAsync(() => {
        expect(component.subredditName).toBe('Subreddit1');
    }));
});
