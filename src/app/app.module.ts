import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ForbiddenUsernameDirective } from './shared/forbidden-username.directive';
import { ValidatePasswordDirective } from './shared/validate-password.directive';


@NgModule({
    declarations: [AppComponent, RegistrationFormComponent, ForbiddenUsernameDirective, ValidatePasswordDirective],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        FormsModule,
        HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
