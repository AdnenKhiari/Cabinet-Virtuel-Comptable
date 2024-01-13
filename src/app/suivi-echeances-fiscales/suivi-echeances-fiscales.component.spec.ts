import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SuiviEcheancesFiscalesComponent } from './suivi-echeances-fiscales.component'

describe('SuiviEcheancesFiscalesComponent', () => {
  let component: SuiviEcheancesFiscalesComponent
  let fixture: ComponentFixture<SuiviEcheancesFiscalesComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviEcheancesFiscalesComponent]
    })
    fixture = TestBed.createComponent(SuiviEcheancesFiscalesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
