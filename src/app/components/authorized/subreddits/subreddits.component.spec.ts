import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SubredditFormatPipe } from 'src/app/pipes/subreddit-format.pipe';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { Post } from 'src/types/posts';
import { Subreddit } from 'src/types/subreddits';
import { SubredditComponent } from '../subreddit/subreddit.component';
import { SubredditsComponent } from './subreddits.component';

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
        title: 'Second Post',
        date_created: new Date('2020-11-11T23:28:56.782Z'),
        subreddit: 'Subreddit2',
        author: 'Author2',
        commentCount: 2,
        post_type: 'text',
        description: 'Describing this second post.',
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
    posts$: BehaviorSubject<Post[]> = new BehaviorSubject(null);

    setPosts(posts: Post[]): void {
        this.posts$.next(posts);
    }

    setCurrentSubredditPosts(postsList: Post[]): void {}
}

class MockSubredditService {
    subreddits$: BehaviorSubject<Subreddit[]> = new BehaviorSubject(null);

    setSubreddits(subreddits: Subreddit[]): void {
        this.subreddits$.next(subreddits);
    }
}

class MockGatewayService {
    getAllPosts(): Observable<Post[]> {
        return of(testPosts);
    }

    getAllSubreddits(): Observable<Subreddit[]> {
        return of(testSubreddits);
    }

    getSubredditPostsFeedByName(subredditName: string): Observable<Post[]> {
        let postsArray: Post[] = [];
        let currentPost: Post = testPosts.find((post) => post.subreddit === subredditName);
        postsArray.push(currentPost);
        return of(postsArray);
    }
}

const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
};

fdescribe('SubredditsComponent', () => {
    let component: SubredditsComponent;
    let fixture: ComponentFixture<SubredditsComponent>;
    let postService: PostService;
    let subredditService: SubredditService;
    let gatewayService: GatewayService;
    let router: Router;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SubredditsComponent, SubredditComponent],
        }).compileComponents();
    });

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
            declarations: [SubredditsComponent, SubredditComponent, SubredditFormatPipe],
            providers: [
                { provide: Router, useValue: mockRouter },
                { provide: PostService, useClass: MockPostService },
                { provide: SubredditService, useClass: MockSubredditService },
                { provide: GatewayService, useClass: MockGatewayService },
            ],
        }).compileComponents();
    });

    function createComponent(): void {
        fixture = TestBed.createComponent(SubredditsComponent);
        component = fixture.componentInstance;
    }

    beforeEach(() => {
        subredditService = TestBed.inject(SubredditService);
        postService = TestBed.inject(PostService);
        gatewayService = TestBed.inject(GatewayService);
        router = TestBed.inject(Router);
    });

    it('should create', () => {
        createComponent();
        expect(component).toBeTruthy();
    });

    it('should call gatewayService.getAllSubreddits in constructor', () => {
        let getAllSubredditsSpy = spyOn(gatewayService, 'getAllSubreddits').and.callThrough();
        createComponent();
        expect(getAllSubredditsSpy).toHaveBeenCalled();
    });

    it('should call subredditService.setSubreddits with data retrieved from gatewayService.getAllSubreddits subscribtion in constructor', () => {
        spyOn(gatewayService, 'getAllSubreddits').and.returnValue(of(testSubreddits));
        let setSubredditsSpy = spyOn(subredditService, 'setSubreddits').and.callThrough();
        createComponent();
        expect(setSubredditsSpy).toHaveBeenCalledWith(testSubreddits);
    });

    it('should call gatewayService.getAllPosts in constructor', () => {
        let getAllPostsSpy = spyOn(gatewayService, 'getAllPosts').and.callThrough();
        createComponent();
        expect(getAllPostsSpy).toHaveBeenCalled();
    });

    it('should call postService.setPosts with data retrieved from gatewayService.getAllPosts subscribtion in constructor', () => {
        spyOn(gatewayService, 'getAllPosts').and.returnValue(of(testPosts));
        let setPostsSpy = spyOn(postService, 'setPosts').and.callThrough();
        createComponent();
        expect(setPostsSpy).toHaveBeenCalledWith(testPosts);
    });

    it('component._subreddits should equal testSubreddits', () => {
        createComponent();
        expect(component._subreddits).toEqual(testSubreddits);
    });

    it('should test private method _navigateToSubredditComponent with parameter subredditName', () => {
        const subredditName = 'Subreddit1';
        createComponent();
        component['_navigateToSubredditComponent'](subredditName);
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/auth/feed', subredditName]);
    });

    it('should test onSelect method with parameter "testSubreddit"', () => {
        let testSubreddit = testSubreddits[0];
        let currentPosts = [];
        currentPosts.push(testPosts[0]);

        let getSubredditPostsFeedByNameSpy = spyOn(gatewayService, 'getSubredditPostsFeedByName')
            .and.returnValue(of(currentPosts))
            .and.callThrough();

        let setCurrentSubredditPostsSpy = spyOn(
            postService,
            'setCurrentSubredditPosts',
        ).and.callThrough();

        createComponent();

        let navigateToSubredditComponentSpy = spyOn<any>(
            component,
            '_navigateToSubredditComponent',
        ).and.callThrough();

        component.onSelect(testSubreddit);

        expect(getSubredditPostsFeedByNameSpy).toHaveBeenCalledWith(testSubreddit.name);
        expect(setCurrentSubredditPostsSpy).toHaveBeenCalledWith(currentPosts);
        expect(navigateToSubredditComponentSpy).toHaveBeenCalledWith(testSubreddit.name);
    });
});
