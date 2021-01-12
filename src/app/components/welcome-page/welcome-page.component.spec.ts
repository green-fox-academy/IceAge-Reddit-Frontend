import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationComponent } from '../navigation/navigation.component';
import { WelcomePageComponent } from './welcome-page.component';

describe('WelcomePageComponent', () => {
    let component: WelcomePageComponent;
    let fixture: ComponentFixture<WelcomePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [WelcomePageComponent, NavigationComponent],
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
