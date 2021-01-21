import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { WelcomePageComponent } from './welcome-page.component';

class RouterTestingModule {}

describe('WelcomePageComponent', () => {
    let component: WelcomePageComponent;
    let fixture: ComponentFixture<WelcomePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WelcomePageComponent, NavigationComponent],
            providers: [{ provide: Router, useClass: RouterTestingModule }],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WelcomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
