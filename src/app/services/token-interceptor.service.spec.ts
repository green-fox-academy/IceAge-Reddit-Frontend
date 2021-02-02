import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from './token-interceptor.service';

describe('TokenInterceptorService', () => {
    let service: TokenInterceptorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TokenInterceptorService);
    });
});
