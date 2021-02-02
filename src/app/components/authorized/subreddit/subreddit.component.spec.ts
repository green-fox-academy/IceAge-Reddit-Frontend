import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { Post } from 'src/types/posts';
import { SubredditComponent } from './subreddit.component';
import { ActivatedRoute } from '@angular/router';
import { Subreddit } from 'src/types/subreddits';
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

describe('SubredditComponent', () => {
    let component: SubredditComponent;
    let activatedRoute: ActivatedRoute;
    let fixture: ComponentFixture<SubredditComponent>;
    let postService: PostService;
    let subredditService: SubredditService;
    let gatewayService: GatewayService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
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

    function createComponent(): void {
        fixture = TestBed.createComponent(SubredditComponent);
        component = fixture.componentInstance;
    }

    beforeEach(() => {
        activatedRoute = TestBed.inject(ActivatedRoute);
        subredditService = TestBed.inject(SubredditService);
        postService = TestBed.inject(PostService);
        gatewayService = TestBed.inject(GatewayService);
    });

    it('should create', () => {
        createComponent();
        expect(component).toBeTruthy();
    });

    it('should test route parameters using Activated routes in constructor', () => {
        createComponent();
        expect(component.subredditName).toBe('Subreddit1');
    });

    it('should call gatewayService.getSubredditPostsFeed with parameter Subreddit1 in constructor', () => {
        let getSubredditPostsFeedSpy = spyOn(gatewayService, 'getSubredditPostsFeedByName')
            .withArgs('Subreddit1')
            .and.callThrough();
        createComponent();
        expect(getSubredditPostsFeedSpy).toHaveBeenCalled();
    });

    it('should call postService.setCurrentSubredditPosts with received data from gatewayService.getSubredditPostsFeedByName method in constructor', () => {
        spyOn(gatewayService, 'getSubredditPostsFeedByName')
            .withArgs('Subreddit1')
            .and.returnValue(of(testPosts));
        let setCurrentSubredditPostsSpy = spyOn(
            postService,
            'setCurrentSubredditPosts',
        ).and.callThrough();
        createComponent();
        expect(setCurrentSubredditPostsSpy).toHaveBeenCalledWith(testPosts);
    });

    it('should call subredditService.getAllSubreddits and assign received data to component.subreddits property in constructor', () => {
        let getAllSubredditsSpy = spyOn(subredditService, 'getAllSubreddits').and.callThrough();
        fixture = TestBed.createComponent(SubredditComponent);
        createComponent();
        expect(getAllSubredditsSpy).toHaveBeenCalled();
        expect(component.subreddits).toEqual(testSubreddits);
    });

    it('should call postService.getCurrentSubredditPosts and assign received data to component.listOfPosts property in constructor', () => {
        spyOn(gatewayService, 'getSubredditPostsFeedByName')
            .withArgs('Subreddit1')
            .and.returnValue(of(testPosts));
        let getCurrentSubredditPostsSpy = spyOn(
            postService,
            'getCurrentSubredditPosts',
        ).and.callThrough();
        createComponent();
        expect(getCurrentSubredditPostsSpy).toHaveBeenCalledWith();
        expect(component.listOfPosts).toEqual(testPosts);
    });
});
