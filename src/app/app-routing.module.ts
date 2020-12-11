import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/authorized/feed/feed.component';
import { WelcomePageComponent } from './components/authorized/welcome-page/welcome-page.component';

const routes: Routes = [
    { path: '', component: WelcomePageComponent },
    { path: 'feed', component: FeedComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
