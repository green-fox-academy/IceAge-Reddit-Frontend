import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/posts';
import { FeedComponent } from './feed.component';

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
class MockGatewayService {
    getAllPosts(): Observable<Post[]> {
        return of(data);
    }
}
class MockPostService {
    posts$: BehaviorSubject<Post[]> = new BehaviorSubject(data);
    data: Post[];
    setPosts(): void {}
}

describe('FeedComponent', () => {
    let component: FeedComponent;
    let fixture: ComponentFixture<FeedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowserModule, AppRoutingModule, HttpClientModule],
            declarations: [FeedComponent],
            providers: [
                { provide: PostService, useClass: MockPostService },
                { provide: GatewayService, useClass: MockGatewayService },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
});
