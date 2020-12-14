import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ForbiddenUsernameDirective } from './shared/forbidden-username.directive';
import { ValidatePasswordDirective } from './shared/validate-password.directive';
import { ValidateEmailDirective } from './shared/validate-email.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
import { SubredditService } from 'src/app/services/subreddit.service';
import { DateAgoPipe } from 'src/app/pipes/date-ago.pipe';
import { SubredditFormatPipe } from 'src/app/pipes/subreddit-format.pipe';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GatewayService } from './services/gateway.service';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { NavigationComponent } from './components/authorized/navigation/navigation.component';
import { SubredditsComponent } from './components/authorized/subreddits/subreddits.component';
import { PostComponent } from './components/authorized/post/post.component';
import { WelcomePageComponent } from './components/authorized/welcome-page/welcome-page.component';

@NgModule({
    declarations: [
        AppComponent,
        RegistrationFormComponent,
        ForbiddenUsernameDirective,
        ValidatePasswordDirective,
        ValidateEmailDirective,
        DateAgoPipe,
        SubredditFormatPipe,
        PostComponent,
		SubredditsComponent,
		routingComponents,
        SubredditsComponent,
        PostComponent,
        DateAgoPipe,
        SubredditFormatPipe,
        NavigationComponent,
        WelcomePageComponent,
    ],
    imports: [
		BrowserModule,  
		AppRoutingModule, 
		FormsModule, 
		HttpClientModule,
	],
    providers: [
		PostService, 
		SubredditService, 
		GatewayService,
		AuthGuard,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptorService,
			multi: true
		}
	],
    bootstrap: [AppComponent],
})
export class AppModule {}
