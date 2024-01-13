import { TestBed } from '@angular/core/testing'

import { PrioriteService } from './priorite.service'

describe('PrioriteService', () => {
  let service: PrioriteService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PrioriteService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
