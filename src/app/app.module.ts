import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { SubredditsComponent } from './components/subreddits/subreddits.component';
import { PostComponent } from './components/post/post.component';
import { FeedComponent } from './components/feed/feed.component';
import { GatewayService } from './services/gateway.service';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { SubredditFormatPipe } from 'src/app/pipes/subreddit-format.pipe';

@NgModule({
    declarations: [AppComponent, SubredditsComponent, FeedComponent, PostComponent, DateAgoPipe, SubredditFormatPipe],
    imports: [
        BrowserModule, 
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        PostService,
        SubredditService,
        GatewayService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
