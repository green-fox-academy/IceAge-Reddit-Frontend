import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { NavigationComponent } from '../navigation/navigation.component';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { AuthorizedComponent } from './authorized.component';
import { SubredditsComponent } from './subreddits/subreddits.component';

describe('AuthorizedComponent', () => {
    let component: AuthorizedComponent;
    let fixture: ComponentFixture<AuthorizedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowserModule, AppRoutingModule, HttpClientModule],
            providers: [PostService, SubredditService, GatewayService],
            declarations: [
                AuthorizedComponent,
                WelcomePageComponent,
                NavigationComponent,
                SubredditsComponent,
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
