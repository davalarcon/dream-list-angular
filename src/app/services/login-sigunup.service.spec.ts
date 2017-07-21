import { TestBed, inject } from '@angular/core/testing';

import { LoginSigunupService } from './login-sigunup.service';

describe('LoginSigunupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSigunupService]
    });
  });

  it('should be created', inject([LoginSigunupService], (service: LoginSigunupService) => {
    expect(service).toBeTruthy();
  }));
});
