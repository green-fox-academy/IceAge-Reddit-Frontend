import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { GatewayService } from './services/gateway.service';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BrowserModule, AppRoutingModule, HttpClientModule],
            declarations: [AppComponent, AuthorizedComponent, WelcomePageComponent, NavigationComponent],
            providers: [GatewayService],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'IceAge-Reddit-Frontend'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('IceAge-Reddit-Frontend');
    });
});
