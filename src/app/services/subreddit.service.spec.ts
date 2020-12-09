import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SubredditService } from './subreddit.service';

describe('SubredditService', () => {
    let service: SubredditService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.inject(SubredditService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
