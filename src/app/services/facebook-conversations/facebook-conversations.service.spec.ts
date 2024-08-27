import { TestBed } from '@angular/core/testing';

import { FacebookConversationsService } from './facebook-conversations.service';

describe('FacebookConversationsService', () => {
  let service: FacebookConversationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacebookConversationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
