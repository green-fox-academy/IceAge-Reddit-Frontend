import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { Post } from 'src/types/posts';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent{

  public _posts: Post[];

  constructor(private _stateService: StateService) { 
    this._stateService.posts$
      .subscribe(posts => this._posts = posts);
  }



}
