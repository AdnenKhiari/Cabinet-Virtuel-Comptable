import { TestBed } from '@angular/core/testing'

import { FiltrageService } from './filtrage.service'

describe('FiltrageService', () => {
  let service: FiltrageService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FiltrageService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
