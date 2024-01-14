import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SaisieComptableComponent } from './saisie-comptable.component'

describe('SaisieComptableComponent', () => {
  let component: SaisieComptableComponent
  let fixture: ComponentFixture<SaisieComptableComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaisieComptableComponent]
    })
    fixture = TestBed.createComponent(SaisieComptableComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
