import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ListeDeclarationsFiscalesComponent } from './liste-declarations-fiscales.component'

describe('ListeDeclarationsFiscalesComponent', () => {
  let component: ListeDeclarationsFiscalesComponent
  let fixture: ComponentFixture<ListeDeclarationsFiscalesComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDeclarationsFiscalesComponent]
    })
    fixture = TestBed.createComponent(ListeDeclarationsFiscalesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
