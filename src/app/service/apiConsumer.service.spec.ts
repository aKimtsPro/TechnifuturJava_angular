/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiConsumerService } from './apiConsumer.service';

describe('Service: ApiConsumer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiConsumerService]
    });
  });

  it('should ...', inject([ApiConsumerService], (service: ApiConsumerService) => {
    expect(service).toBeTruthy();
  }));
});
