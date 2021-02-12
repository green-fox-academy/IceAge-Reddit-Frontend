import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { WelcomePageComponent } from './welcome-page.component';

const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
};

describe('WelcomePageComponent', () => {
    let component: WelcomePageComponent;
    let fixture: ComponentFixture<WelcomePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WelcomePageComponent, NavigationComponent],
            providers: [{ provide: Router, useValue: mockRouter }],
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
