import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GatewayService } from 'src/app/services/gateway.service';
import { PostDetails } from 'src/types/posts';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
    @Input() post: PostDetails;

    constructor(private _route: ActivatedRoute, private _gatewayService: GatewayService) {}

    ngOnInit(): void {
        this.getPostDetails();
    }

    getPostDetails(): void {
        const id = +this._route.snapshot.paramMap.get('id');
        this._gatewayService.getPostDetails(id).subscribe((post) => (this.post = post));
    }
}
