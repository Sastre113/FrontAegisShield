import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardianOfAegisGuard } from './guardian-of-aegis.guard';

describe('guardianOfAegisGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardianOfAegisGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
