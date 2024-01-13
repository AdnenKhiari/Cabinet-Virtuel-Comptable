import { TestBed } from '@angular/core/testing'

import { RapportService } from './rapport.service'

describe('RapportService', () => {
  let service: RapportService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(RapportService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
