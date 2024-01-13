import { TestBed } from '@angular/core/testing'

import { SuiviService } from './suivi.service'

describe('SuiviService', () => {
  let service: SuiviService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SuiviService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
