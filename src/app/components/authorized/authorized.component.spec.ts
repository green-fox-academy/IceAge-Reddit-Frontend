import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedComponent } from './authorized.component';

describe('AuthorizedComponent', () => {
    let component: AuthorizedComponent;
    let fixture: ComponentFixture<AuthorizedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthorizedComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthorizedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
