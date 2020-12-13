import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ForbiddenUsernameDirective } from './shared/forbidden-username.directive';
import { ValidatePasswordDirective } from './shared/validate-password.directive';
import { ValidateEmailDirective } from './shared/validate-email.directive';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { SubredditFormatPipe } from 'src/app/pipes/subreddit-format.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubredditsComponent } from './components/subreddits/subreddits.component';
import { PostComponent } from './components/post/post.component';
import { FeedComponent } from './components/feed/feed.component';
import { GatewayService } from './services/gateway.service';

@NgModule({
    declarations: [
        AppComponent,
        RegistrationFormComponent,
        ForbiddenUsernameDirective,
        ValidatePasswordDirective,
        ValidateEmailDirective,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [
        SubredditsComponent,
        FeedComponent,
        PostComponent,
        DateAgoPipe,
        SubredditFormatPipe,
        PostService,
        SubredditService,
        GatewayService,
    ],

    bootstrap: [AppComponent],
})
export class AppModule {}
