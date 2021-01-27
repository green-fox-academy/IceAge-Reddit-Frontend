import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExtraOptions, Router, Routes } from '@angular/router';
import { AddNewSubredditComponent } from './add-new-subreddit.component';
import { GatewayService } from 'src/app/services/gateway.service';
import { SubredditCreation } from 'src/types/subreddits';
import { ModuleWithProviders } from '@angular/core';
import { Observable, of } from 'rxjs';

class MockService {
    createSubreddit(subreddit: SubredditCreation): Observable<SubredditCreation> {
        return of(mockedSubreddit);
    }
}

class RouterTestingModule {}

let mockedSubreddit: SubredditCreation = {
    name: '',
    title: '',
    description: '',
};

describe('AddNewSubredditComponent', () => {
    let component: AddNewSubredditComponent;
    let fixture: ComponentFixture<AddNewSubredditComponent>;
    let mockService: MockService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [AddNewSubredditComponent],
            providers: [
                HttpClient,
                { provide: GatewayService, useClass: MockService },
                { provide: Router, useClass: RouterTestingModule },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddNewSubredditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('createNewSubreddit() method should create object equal to data from mockedSubreddit', () => {
        //component['createNewSubreddit()'](mockedSubreddit);
        expect(mockService.createSubreddit(component.subreddit)).toBe(mockedSubreddit);
        //expect(component.subreddit.name).toMatch(mockedSubreddit.name);
        //expect(component.subreddit.title).toMatch(mockedSubreddit.title);
        //expect(component.subreddit.description).toMatch(mockedSubreddit.description);
    });
});
