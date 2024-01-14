import { ComponentFixture, TestBed } from '@angular/core/testing'

import { HistoriqueActionsComponent } from './historique-actions.component'

describe('HistoriqueActionsComponent', () => {
  let component: HistoriqueActionsComponent
  let fixture: ComponentFixture<HistoriqueActionsComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueActionsComponent]
    })
    fixture = TestBed.createComponent(HistoriqueActionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
