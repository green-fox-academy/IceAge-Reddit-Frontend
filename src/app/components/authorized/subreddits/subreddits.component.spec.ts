import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
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

class MockPostService {}

class MockSubredditService {}

class MockGatewayService {}

describe('SubredditsComponent', () => {
    let component: SubredditsComponent;
    let fixture: ComponentFixture<SubredditsComponent>;

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
            declarations: [SubredditsComponent, SubredditComponent],
            providers: [
                { provide: PostService, useClass: MockPostService },
                { provide: SubredditService, useClass: MockSubredditService },
                { provide: GatewayService, useClass: MockGatewayService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SubredditsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
