import { TestBed } from '@angular/core/testing';
import { Post } from 'src/types/posts';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Subreddit } from 'src/types/subreddits';
import { GatewayService } from './gateway.service';

describe('GatewayService', () => {
    let service: GatewayService;
    let mockHttp: HttpTestingController;

    const baseUrl = 'http://localhost:3000/api/v1/';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [GatewayService],
        });
        service = TestBed.inject(GatewayService);
        mockHttp = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        mockHttp.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    // FEED

    it('should retrieve posts from the API via HttpClient.get method', () => {
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

        service.getAllPosts().subscribe((posts) => {
            expect(posts).toEqual(testPosts);
            expect(posts.length).toBe(2);
        });

        const request = mockHttp.expectOne(`${baseUrl}feed`);

        expect(request.request.method).toBe('GET');
        expect(request.cancelled).toBeFalsy();
        expect(request.request.responseType).toEqual('json');

        request.flush(testPosts);
    });

    // SUBREDDITS

    it('should retrieve subreddits from the API via HttpClient.get method', () => {
        const testSubreddits: Subreddit[] = [
            {
                name: 'Subreddit1',
                title: 'Subreddit1 title',
                date_created: new Date('2014-01-01T23:28:56.782Z'),
                description: 'Subreddit1 about something',
                userCount: 10,
                author: 'Author1',
            },
            {
                name: 'Subreddit2',
                title: 'Subreddit2 title',
                date_created: new Date('2020-11-30T17:10:56.782Z'),
                description: 'Subreddit2 obout anything',
                userCount: 20,
                author: 'Author2',
            },
        ];

        service.getAllSubreddits().subscribe((subreddits) => {
            expect(subreddits).toEqual(testSubreddits);
            expect(subreddits.length).toBe(2);
        });

        const request = mockHttp.expectOne(`${baseUrl}subreddits`);

        expect(request.request.method).toBe('GET');
        expect(request.cancelled).toBeFalsy();
        expect(request.request.responseType).toEqual('json');

        request.flush(testSubreddits);
    });
});
