import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ImpressionsDocumentsListComponent } from './impressions-documents-list.component'

describe('ImpressionsDocumentsListComponent', () => {
  let component: ImpressionsDocumentsListComponent
  let fixture: ComponentFixture<ImpressionsDocumentsListComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpressionsDocumentsListComponent]
    })
    fixture = TestBed.createComponent(ImpressionsDocumentsListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
