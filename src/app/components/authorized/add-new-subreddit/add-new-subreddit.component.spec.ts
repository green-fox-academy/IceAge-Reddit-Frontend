import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExtraOptions, Router, Routes } from '@angular/router';
import { AddNewSubredditComponent } from './add-new-subreddit.component';
import { GatewayService } from 'src/app/services/gateway.service';
import { SubredditCreation } from 'src/types/subreddits';
import { ModuleWithProviders } from '@angular/core';

class MockDataService {}

class RouterTestingModule {}

const mockedSubreddit: SubredditCreation = {
    name: 'Name of Subreddit',
    title: 'Title of Subreddit',
    description: 'Description of Subreddit',
};

describe('AddNewSubredditComponent', () => {
    let component: AddNewSubredditComponent;
    let fixture: ComponentFixture<AddNewSubredditComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [AddNewSubredditComponent],
            providers: [
                HttpClient,
                { provide: GatewayService, useClass: MockDataService },
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

    /*it('subreddit form on submit should create object equal to data from MockSubreddit', () => {
        expect(component.onSubmit).toEqual(mockedSubreddit);
    });*/
});
