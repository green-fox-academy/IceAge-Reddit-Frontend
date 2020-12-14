import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FeedComponent } from './components/feed/feed.component';
import { AuthGuard } from './auth.guard';

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
