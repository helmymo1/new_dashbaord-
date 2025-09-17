import { TestBed } from '@angular/core/testing';

import { Withdrawal } from './withdrawal';

describe('Withdrawal', () => {
  let service: Withdrawal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Withdrawal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
