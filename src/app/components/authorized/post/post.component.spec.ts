import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { SubredditFormatPipe } from 'src/app/pipes/subreddit-format.pipe';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/types/posts';
import { PostComponent } from './post.component';

class MockPostService {
    _posts: Post[] = [
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

    posts$: BehaviorSubject<Post[]> = new BehaviorSubject(this._posts);

    getPost(postId: number): Post {
        const result = this._posts.find((post) => post.id === postId);
        return result;
    }
}

fdescribe('PostComponent', () => {
    let component: PostComponent;
    let fixture: ComponentFixture<PostComponent>;
    let postService: PostService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PostComponent, DateAgoPipe, SubredditFormatPipe],
            providers: [{ provide: PostService, useClass: MockPostService }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
        component.postId = 1;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should make a call to postService.getPost(postId)', () => {
        spyOn(component['_postService'], 'getPost').and.callThrough();
        component.ngOnInit();
        expect(component['_postService'].getPost).toHaveBeenCalledWith(component.postId);
    });
});
