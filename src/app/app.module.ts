import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { SubredditFormatPipe } from 'src/app/pipes/subreddit-format.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubredditsComponent } from './components/subreddits/subreddits.component';
import { PostComponent } from './components/post/post.component';
import { FeedComponent } from './components/feed/feed.component';
import { GatewayService } from './services/gateway.service';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

@NgModule({
    declarations: [
        AppComponent,
        SubredditsComponent,
        FeedComponent,
        PostComponent,
        DateAgoPipe,
        SubredditFormatPipe,
        WelcomePageComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [PostService, SubredditService, GatewayService],
    bootstrap: [AppComponent],
})
export class AppModule {}
