import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { FeedComponent } from './components/authorized/feed/feed.component';

const routes: Routes = [
	{ path: '', redirectTo: 'feed', pathMatch: 'full' },
    { path: 'feed', component: FeedComponent, canActivate: [AuthGuard]},
    {
        path: 'registration',
        component: RegistrationFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [AuthorizedComponent, FeedComponent];
