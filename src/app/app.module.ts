import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ForbiddenPasswordDirective } from './shared/forbidden-password.directive';


@NgModule({
    declarations: [AppComponent, RegistrationFormComponent, ForbiddenPasswordDirective],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        FormsModule,
        HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
