import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GatewayService } from './gateway.service';

describe('GatewayService', () => {
  let service: GatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(GatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
