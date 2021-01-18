import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
    beforeEach(() => {
        routerSpy = jasmine.createSpyObj<Router>('Router', ['navigate']); // [1]
        guard = new AuthGuard(routerSpy); // [3]
    });

    let guard: AuthGuard;
    let routerSpy: jasmine.SpyObj<Router>;

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
