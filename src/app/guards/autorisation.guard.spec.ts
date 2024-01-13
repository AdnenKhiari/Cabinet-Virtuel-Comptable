import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autorisationGuard } from './autorisation.guard';

describe('autorisationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => autorisationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
