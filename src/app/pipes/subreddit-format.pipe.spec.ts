import { SubredditFormatPipe } from './subreddit-format.pipe';

fdescribe('SubredditFormatPipe', () => {
    const pipe = new SubredditFormatPipe();

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should add "/r/" as prefix to the string "subreddit"', () => {
        const testWord = 'subreddit';
        expect(pipe.transform(testWord)).toBe('/r/subreddit');
    });
});
