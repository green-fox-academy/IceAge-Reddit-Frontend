import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GatewayService } from 'src/app/services/gateway.service';

import { LoginFormComponent } from './login-form.component';

class MockDataService {}

class RouterTestingModule {}

describe('LoginFormComponent', () => {
    let component: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [LoginFormComponent],
            providers: [
                HttpClient,
                { provide: GatewayService, useClass: MockDataService },
                { provide: Router, useClass: RouterTestingModule },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
