import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'subredditFormat',
})
export class SubredditFormatPipe implements PipeTransform {
    transform(value: string): string {
        return `/r/${value}`;
    }
}
