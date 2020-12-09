import { TestBed } from '@angular/core/testing';
import { Post } from 'src/types/posts';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GatewayService } from './gateway.service';

describe('GatewayService', () => {
    let service: GatewayService;
    let httpTestController: HttpTestingController;
    const feedData = 'http://localhost:3000/api/v1/feed';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GatewayService],
        });
        service = TestBed.inject(GatewayService);
        httpTestController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should test HttpClient.get', () => {
        const testPosts: Post[] = [
            {
                id: 1,
                title: 'First post',
                date_created: new Date('2014-01-01T23:28:56.782Z'),
                subreddit: 'Subreddit1',
                author: 'Author1',
                commentCount: 2,
                post_type: 'text',
                description: 'Post about something',
            },
            {
                id: 2,
                title: 'Second post',
                date_created: new Date('2020-11-30T17:10:56.782Z'),
                subreddit: 'Subreddit2',
                author: 'Author2',
                commentCount: 3,
                post_type: 'url',
                posted_url: 'https://seznam.cz',
                description: 'Post about anything',
            },
        ];

        service.fetchPosts().subscribe((posts) => {
            expect(testPosts).toBe(posts);
        });

        const request = httpTestController.expectOne(feedData);

        expect(request.cancelled).toBeFalsy();
        expect(request.request.responseType).toEqual('json');

        request.flush(testPosts);
    });
});
