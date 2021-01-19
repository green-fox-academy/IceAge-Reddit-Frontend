import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
//import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/posts';
//import { SubredditService } from 'src/app/services/subreddit.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { AuthorizedComponent } from './authorized.component';

class MockGatewayService {
    mockPosts: Post[] = [
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

    getAllPosts(): Observable<Post[]> {
        return of(this.mockPosts);
    }
}
class MockPostService {
    setPosts(posts: Post[]): void {}
}

describe('AuthorizedComponent', () => {
    let component: AuthorizedComponent;
    let fixture: ComponentFixture<AuthorizedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowserModule, AppRoutingModule, HttpClientModule],
            declarations: [AuthorizedComponent, WelcomePageComponent, NavigationComponent],
            //providers: [PostService, SubredditService, GatewayService],
            providers: [
                HttpClient,
                { provide: GatewayService, useClass: MockGatewayService },
                { provide: PostService, useClass: MockPostService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorizedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
