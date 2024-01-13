import { TestBed } from '@angular/core/testing'

import { CommentaireService } from './comments.service'

describe('CommentsService', () => {
  let service: CommentaireService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CommentaireService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
