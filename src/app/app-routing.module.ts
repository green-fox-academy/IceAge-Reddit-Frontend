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
import { PostDetailsComponent } from './components/authorized/post-details/post-details.component';
import { AddNewSubredditComponent } from './components/authorized/add-new-subreddit/add-new-subreddit.component';

export const routes: Routes = [
    { path: '', redirectTo: '/auth/feed', pathMatch: 'full' },
    { path: 'land-page', component: WelcomePageComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegistrationFormComponent },
    {
        path: 'auth',
        component: AuthorizedComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'feed',
                children: [
                    { path: '', component: FeedComponent },
                    { path: ':name', component: SubredditComponent },
                ],
            },
            { path: 'add-new-post', component: AddNewPostComponent },
            { path: 'subreddits', component: SubredditsComponent },
            {
                path: 'create-subreddit',
                component: AddNewSubredditComponent,
            },
            {
                path: 'post-details/:id',
                component: PostDetailsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
