import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddNewSubredditComponent } from './add-new-subreddit.component';
import { GatewayService } from 'src/app/services/gateway.service';
import { SubredditCreation } from 'src/types/subreddits';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedComponent } from '../feed/feed.component';

class MockGatewayService {
    createSubreddit(subreddit: SubredditCreation): Observable<SubredditCreation> {
        return of(mockedSubreddit);
    }
}

let mockedSubreddit: SubredditCreation = {
    name: '',
    title: '',
    description: '',
};

const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
};

describe('AddNewSubredditComponent', () => {
    let component: AddNewSubredditComponent;
    let fixture: ComponentFixture<AddNewSubredditComponent>;
    let gatewayService: GatewayService;
    let router: RouterTestingModule;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                RouterTestingModule.withRoutes([
                    {
                        path: '/auth/add-new-post',
                        component: FeedComponent,
                    },
                ]),
            ],
            declarations: [AddNewSubredditComponent, FeedComponent],
            providers: [
                HttpClient,
                { provide: GatewayService, useClass: MockGatewayService },
                { provide: Router, useValue: mockRouter },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        gatewayService = TestBed.inject(GatewayService);
        fixture = TestBed.createComponent(AddNewSubredditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('createNewSubreddit() should be called and reroute to feed', () => {
        let getSpyForCreateSubreddit = spyOn(gatewayService, 'createSubreddit').and.callThrough();
        component.createNewSubreddit();
        expect(getSpyForCreateSubreddit).toHaveBeenCalled();
    });

    it('subreddit in component should be equal to mockedSubreddit', () => {
        expect(component.subreddit).toEqual(mockedSubreddit);
    });
});
