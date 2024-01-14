import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ComptesBancairesComponent } from './comptes-bancaires.component'

describe('ComptesBancairesComponent', () => {
  let component: ComptesBancairesComponent
  let fixture: ComponentFixture<ComptesBancairesComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComptesBancairesComponent]
    })
    fixture = TestBed.createComponent(ComptesBancairesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
