import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ForbiddenUsernameDirective } from './shared/forbidden-username.directive';
import { ValidatePasswordDirective } from './shared/validate-password.directive';
import { ValidateEmailDirective } from './shared/validate-email.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { SubredditFormatPipe } from 'src/app/pipes/subreddit-format.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatewayService } from './services/gateway.service';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { SubredditsComponent } from './components/authorized/subreddits/subreddits.component';
import { PostComponent } from './components/authorized/post/post.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { FeedComponent } from './components/authorized/feed/feed.component';
import { SubredditComponent } from './components/authorized/subreddit/subreddit.component';
import { RegistrationFormComponent } from './components/login-registration/registration-form/registration-form.component';
import { AddNewSubredditComponent } from './components/authorized/add-new-subreddit/add-new-subreddit.component';

@NgModule({
    declarations: [
        AppComponent,
        WelcomePageComponent,
        NavigationComponent,
        RegistrationFormComponent,
        LoginFormComponent,
        AuthorizedComponent,
        FeedComponent,
        PostComponent,
        SubredditsComponent,
        SubredditComponent,
        ForbiddenUsernameDirective,
        ValidatePasswordDirective,
        ValidateEmailDirective,
        DateAgoPipe,
        SubredditFormatPipe,
        AddNewSubredditComponent,
    ],
    imports: [BrowserModule, CommonModule, AppRoutingModule, FormsModule, HttpClientModule],
    providers: [
        PostService,
        SubredditService,
        GatewayService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
