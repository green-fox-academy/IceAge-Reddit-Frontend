import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FeedComponent } from './components/feed/feed.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
    { path: '', redirectTo: 'feed', pathMatch: 'full' },
    { path: 'feed', component: FeedComponent },
    {
        path: 'registration',
        component: RegistrationFormComponent,
    },
    {
        path: 'login',
        component: LoginFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
