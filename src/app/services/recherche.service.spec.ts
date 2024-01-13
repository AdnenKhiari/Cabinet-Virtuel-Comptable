import { TestBed } from '@angular/core/testing'

import { SearchService } from './recherche.service'

describe('RechercheService', () => {
  let service: SearchService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(SearchService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
