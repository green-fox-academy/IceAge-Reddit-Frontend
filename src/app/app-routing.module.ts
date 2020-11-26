import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';

const base = 'api/v1/';

const routes: Routes = [
    { path: '', redirectTo: base +'feed', pathMatch: 'full' },
    { path: base + 'feed', component: FeedComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
