import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './components/login-registration/registration-form/registration-form.component';
import { FeedComponent } from './components//authorized/feed/feed.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SubredditsComponent } from './components/authorized/subreddits/subreddits.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
    { path: 'registration', component: RegistrationFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'subreddits', component: SubredditsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
