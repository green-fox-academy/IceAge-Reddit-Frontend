import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { GatewayService } from 'src/app/services/gateway.service';
import { Subreddit } from 'src/types/subreddits';
import { AddNewPostComponent } from './add-new-post.component';
import { of } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

const mockedSubreddits: Subreddit[] = [
    {
        name: 'Subreddit',
        title: 'title',
        date_created: new Date('2020-11-11T23:28:56.782Z'),
        description: 'Description',
        userCount: 1,
        author: 'Jirinka',
    },
    {
        name: 'Subreddit2',
        title: 'title2',
        date_created: new Date('2020-11-11T23:28:56.782Z'),
        description: 'Description2',
        userCount: 1,
        author: 'Martin',
    },
];

class MockGatewayService {
    getAllSubreddits(): Observable<Subreddit[]> {
        return of(mockedSubreddits);
    }
}
class MockPostService {}

class RouterTestingModule {}

describe('AddNewPostComponent', () => {
    let component: AddNewPostComponent;
    let fixture: ComponentFixture<AddNewPostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [AddNewPostComponent],
            providers: [
                HttpClient,
                { provide: GatewayService, useClass: MockGatewayService },
                { provide: Router, useClass: RouterTestingModule },
                { provide: PostService, useClass: MockPostService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AddNewPostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
