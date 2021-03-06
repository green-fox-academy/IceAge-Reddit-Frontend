import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Subreddit } from 'src/types/subreddits';

import { SubredditService } from './subreddit.service';

const subredditsData: Subreddit[] = [
    {
        name: 'Subreddit1',
        title: 'Subreddit1 title',
        date_created: new Date('2014-01-01T23:28:56.782Z'),
        description: 'Subreddit1 about something',
        userCount: 10,
        author: 'Author1',
        posts: [],
    },
    {
        name: 'Subreddit2',
        title: 'Subreddit2 title',
        date_created: new Date('2020-11-30T17:10:56.782Z'),
        description: 'Subreddit2 obout anything',
        userCount: 20,
        author: 'Author2',
        posts: [],
    },
];

describe('SubredditService', () => {
    let service: SubredditService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SubredditService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('subreddits$ should be null', () => {
        expect(service.subreddits$).toEqual(new BehaviorSubject(null));
    });

    it('setSubreddits function should add SubredditsData to testSubreddits', () => {
        service.setSubreddits(subredditsData);
        expect(service.subreddits$).toEqual(new BehaviorSubject(subredditsData));
    });
});
