import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, of } from 'rxjs';
import { Post } from 'src/types/posts';
import { PostService } from './post.service';

const postsData: Post[] = [
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

describe('PostService', () => {
    let service: PostService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PostService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('posts$ should be null', () => {
        expect(service.posts$).toEqual(new BehaviorSubject(null));
    });

    it('setPosts function should add postsData to testPosts', () => {
        service.setPosts(postsData);
        expect(service.posts$).toEqual(new BehaviorSubject(postsData));
    });

    it('getAllPosts should return null', () => {
        expect(service.getAllPosts()).toEqual(new BehaviorSubject(null));
    });

    it('getAllPosts should return postsData after setPosts function', () => {
        service.setPosts(postsData);
        expect(service.getAllPosts()).toEqual(new BehaviorSubject(postsData));
    });

    it('getPost should return post with id 1 after setPosts', () => {
        service.setPosts(postsData);
        const testPost: Post = postsData.find((post) => post.id === 1);
        expect(service.getPost(1)).toEqual(testPost);
    });
});
