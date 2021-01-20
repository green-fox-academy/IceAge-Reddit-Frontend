import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/authorized/feed/feed.component';
import { SubredditComponent } from './components/authorized/subreddit/subreddit.component';
import { RegistrationFormComponent } from './components/login-registration/registration-form/registration-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SubredditsComponent } from './components/authorized/subreddits/subreddits.component';
import { AuthGuard } from './guards/auth.guard';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { PostDetailsComponent } from './components/authorized/post-details/post-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/auth/feed', pathMatch: 'full' },

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
            {
                path: 'post-details/:id',
                component: PostDetailsComponent,
            },
        ],
    },

    { path: 'land-page', component: WelcomePageComponent },
    { path: 'register', component: RegistrationFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'subreddits', component: SubredditsComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
