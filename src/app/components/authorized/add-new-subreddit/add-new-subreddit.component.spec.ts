import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AddNewSubredditComponent } from './add-new-subreddit.component';
import { GatewayService } from 'src/app/services/gateway.service';

class MockDataService {}

class RouterTestingModule {}

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
});
