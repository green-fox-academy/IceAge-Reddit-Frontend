import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/types/posts';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
    @Input() post: Post;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.getPostDetails();
    }

    getPostDetails(): void {
        const id = +this.route.snapshot.paramMap.get('id');
    }
}
