import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SubredditService } from 'src/app/services/subreddit.service';
import { SubredditComponent } from './subreddit.component';

class MockDataService {}

class RouterTestingModule {}

describe('SubredditComponent', () => {
    let component: SubredditComponent;
    let fixture: ComponentFixture<SubredditComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [SubredditComponent],
            providers: [
                HttpClient,
                { provide: SubredditService, useClass: MockDataService },
                { provide: Router, useClass: RouterTestingModule },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SubredditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
