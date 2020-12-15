import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { FeedComponent } from './components/authorized/feed/feed.component';
import { SubredditComponent } from './components/authorized/subreddit/subreddit.component';
import { SubredditsComponent } from './components/authorized/subreddits/subreddits.component';

const routes: Routes = [
    { path: 'feed', component: FeedComponent },
    { path: 'subreddits', component: SubredditsComponent },
    { path: 'subreddits/:name', component: SubredditComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
    AuthorizedComponent,
    FeedComponent,
    SubredditsComponent,
    SubredditComponent,
];
