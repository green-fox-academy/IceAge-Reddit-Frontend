import { BrowserModule } from '@angular/platform-browser';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { SubredditFormatPipe } from 'src/app/pipes/subreddit-format.pipe';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatewayService } from './services/gateway.service';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PostComponent } from './components/authorized/post/post.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ForbiddenUsernameDirective } from './shared/forbidden-username.directive';
import { ValidateEmailDirective } from './shared/validate-email.directive';
import { ValidatePasswordDirective } from './shared/validate-password.directive';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { FeedComponent } from './components/authorized/feed/feed.component';
import { SubredditComponent } from './components/authorized/subreddit/subreddit.component';
import { SubredditsComponent } from './components/authorized/subreddits/subreddits.component';
import { RegistrationFormComponent } from './components/login-registration/registration-form/registration-form.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthorizedComponent,
        FeedComponent,
        SubredditsComponent,
        SubredditComponent,
        RegistrationFormComponent,
        DateAgoPipe,
        SubredditFormatPipe,
        NavigationComponent,
        WelcomePageComponent,
        ForbiddenUsernameDirective,
        ValidatePasswordDirective,
        ValidateEmailDirective,
        PostComponent,
        LoginFormComponent,
    ],
    imports: [BrowserModule, CommonModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [PostService, SubredditService, GatewayService],
    bootstrap: [AppComponent],
})
export class AppModule {}
