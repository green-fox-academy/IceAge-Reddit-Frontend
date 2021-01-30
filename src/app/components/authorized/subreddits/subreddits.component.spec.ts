import { ComponentFixture, TestBed } from '@angular/core/testing';
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

fdescribe('SubredditsComponent', () => {
    let component: SubredditsComponent;
    let fixture: ComponentFixture<SubredditsComponent>;
    let postService: PostService;
    let subredditService: SubredditService;
    let gatewayService: GatewayService;

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
                { provide: PostService, useClass: MockPostService },
                { provide: SubredditService, useClass: MockSubredditService },
                { provide: GatewayService, useClass: MockGatewayService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        subredditService = TestBed.inject(SubredditService);
        postService = TestBed.inject(PostService);
        gatewayService = TestBed.inject(GatewayService);
    });

    it('should create', () => {
        fixture = TestBed.createComponent(SubredditsComponent);
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('should call gatewayService.getAllSubreddits in constructor', () => {
        let getAllSubredditsSpy = spyOn(gatewayService, 'getAllSubreddits').and.callThrough();
        fixture = TestBed.createComponent(SubredditsComponent);
        component = fixture.componentInstance;
        expect(getAllSubredditsSpy).toHaveBeenCalled();
    });

    it('should call subredditService.setSubreddits with data retrieved from gatewayService.getAllSubreddits subscribtion in constructor', () => {
        spyOn(gatewayService, 'getAllSubreddits').and.returnValue(of(testSubreddits));
        let setSubredditsSpy = spyOn(subredditService, 'setSubreddits').and.callThrough();
        fixture = TestBed.createComponent(SubredditsComponent);
        component = fixture.componentInstance;
        expect(setSubredditsSpy).toHaveBeenCalledWith(testSubreddits);
    });

    it('should call gatewayService.getAllPosts in constructor', () => {
        let getAllPostsSpy = spyOn(gatewayService, 'getAllPosts').and.callThrough();
        fixture = TestBed.createComponent(SubredditsComponent);
        component = fixture.componentInstance;
        expect(getAllPostsSpy).toHaveBeenCalled();
    });

    it('should call postService.setPosts with data retrieved from gatewayService.getAllPosts subscribtion in constructor', () => {
        spyOn(gatewayService, 'getAllPosts').and.returnValue(of(testPosts));
        let setPostsSpy = spyOn(postService, 'setPosts').and.callThrough();
        fixture = TestBed.createComponent(SubredditsComponent);
        component = fixture.componentInstance;
        expect(setPostsSpy).toHaveBeenCalledWith(testPosts);
    });

    it('component._subreddits should equal testSubreddits', () => {
        fixture = TestBed.createComponent(SubredditsComponent);
        component = fixture.componentInstance;
        expect(component._subreddits).toEqual(testSubreddits);
    });
});
