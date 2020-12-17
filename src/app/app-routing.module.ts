import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/authorized/feed/feed.component';
import { SubredditComponent } from './components/authorized/subreddit/subreddit.component';
import { SubredditsComponent } from './components/authorized/subreddits/subreddits.component';
import { RegistrationFormComponent } from './components/login-registration/registration-form/registration-form.component';

const routes: Routes = [
    { path: 'feed', component: FeedComponent },
    { path: 'subreddits', component: SubredditsComponent },
    { path: 'subreddits/:name', component: SubredditComponent },
    { path: 'registration', component: RegistrationFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
    FeedComponent,
    SubredditsComponent,
    SubredditComponent,
    RegistrationFormComponent,
];
