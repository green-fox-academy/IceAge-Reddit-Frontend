import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { FeedComponent } from './feed.component';

export interface Post {
    id: number;
    title: string;
    date_created: Date;
    subreddit: string;
    author: string;
    commentCount: number;
    post_type: string;
    posted_url?: string;
    description: string;
}

const data: Post[] = [
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

class MockPostService {
    posts$: BehaviorSubject<Post[]> = new BehaviorSubject(data);
}

describe('FeedComponent', () => {
    let component: FeedComponent;
    let fixture: ComponentFixture<FeedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FeedComponent],
            providers: [{ provide: PostService, useClass: MockPostService }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('component _posts should equal to data from MockPostService', () => {
        expect(component._posts).toEqual(data);
    });
});
