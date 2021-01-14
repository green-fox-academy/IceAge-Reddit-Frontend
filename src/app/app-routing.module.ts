import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './components/login-registration/registration-form/registration-form.component';
import { FeedComponent } from './components//authorized/feed/feed.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SubredditsComponent } from './components/authorized/subreddits/subreddits.component';
import { SubredditComponent } from './components/authorized/subreddit/subreddit.component';

const routes: Routes = [
    { path: 'feed', component: FeedComponent },
    { path: 'registration', component: RegistrationFormComponent },
    { path: 'createSubreddit', component: SubredditComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'subreddits', component: SubredditsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
