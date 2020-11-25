import { Component } from '@angular/core';
import { GatewayService } from 'src/app/services/gateway.service';
import { StateService } from 'src/app/services/state.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'IceAge-Reddit-Frontend';

    constructor(
        private _gateway: GatewayService,
        private _stateService: StateService
    ) {
        this._gateway.fetchPosts()
            .subscribe(response => {
                this._stateService.setPosts(response.posts);
            })
    }
}
