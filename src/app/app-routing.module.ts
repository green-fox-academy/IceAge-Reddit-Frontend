import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { FeedComponent } from './components/authorized/feed/feed.component';

const routes: Routes = [
    {
        path: 'authorized',
        component: AuthorizedComponent,
        children: [{ path: 'feed', component: FeedComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [AuthorizedComponent, FeedComponent];
