import { TestBed } from '@angular/core/testing';

import { SubscriptionData } from './subscription-data';

describe('SubscriptionData', () => {
  let service: SubscriptionData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscriptionData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
