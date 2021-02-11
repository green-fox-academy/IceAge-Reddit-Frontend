import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/authorized/feed/feed.component';
import { SubredditComponent } from './components/authorized/subreddit/subreddit.component';
import { RegistrationFormComponent } from './components/login-registration/registration-form/registration-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SubredditsComponent } from './components/authorized/subreddits/subreddits.component';
import { AddNewPostComponent } from './components/authorized/add-new-post/add-new-post.component';
import { AuthGuard } from './guards/auth.guard';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { AddNewSubredditComponent } from './components/authorized/add-new-subreddit/add-new-subreddit.component';

export const routes: Routes = [
    { path: '', redirectTo: '/auth/feed', pathMatch: 'full' },
    { path: 'create-subreddit', component: AddNewSubredditComponent, canActivate: [AuthGuard] },

    {
        path: 'auth',
        component: AuthorizedComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'feed',
                children: [
                    { path: '', component: FeedComponent, canActivate: [AuthGuard] },
                    { path: ':name', component: SubredditComponent },
                ],
            },
        ],
    },

    { path: 'land-page', component: WelcomePageComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'add-new-post', component: AddNewPostComponent, canActivate: [AuthGuard] },
    { path: 'subreddits', component: SubredditsComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
