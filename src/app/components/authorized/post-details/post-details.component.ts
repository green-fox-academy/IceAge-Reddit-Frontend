import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GatewayService } from 'src/app/services/gateway.service';
import { NewComment, PostDetails } from 'src/types/posts';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
    @Input() post: PostDetails;
    commentDescription: string;

    constructor(private _route: ActivatedRoute, private _gatewayService: GatewayService) {}

    ngOnInit(): void {
        const id = +this._route.snapshot.paramMap.get('id');
        this._gatewayService.getPostDetails(id).subscribe((post) => {
            this.post = post;
            this.post.comments.sort((a, b) => {
                const dateA: Date = new Date(a.date_created);
                const dateB: Date = new Date(b.date_created);
                const number: number = dateA.getTime() - dateB.getTime();
                return number;
            });
        });
    }

    addComment(): void {
        if (this.commentDescription == null) return;

        const newComment: NewComment = {
            postId: this.post.id,
            description: this.commentDescription,
        };

        this._gatewayService.postNewComment(newComment).subscribe((comment) => {
            this.post.commentCount = this.post.comments.push(comment);
        });

        this.commentDescription = null;
    }
}
