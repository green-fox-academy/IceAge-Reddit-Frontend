import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './components/login-registration/registration-form/registration-form.component';
import { FeedComponent } from './components//authorized/feed/feed.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SubredditsComponent } from './components/authorized/subreddits/subreddits.component';
import { AuthGuard } from './guards/auth.guard';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/feed', pathMatch: 'full' },
    { path: 'land-page', component: WelcomePageComponent },
    { path: 'registration', component: RegistrationFormComponent },
    { path: 'login', component: LoginFormComponent },

    { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
    { path: 'subreddits', component: SubredditsComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
