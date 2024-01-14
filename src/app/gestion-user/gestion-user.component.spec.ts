import { ComponentFixture, TestBed } from '@angular/core/testing'

import { GestionUserComponent } from './gestion-user.component'

describe('GestionUserComponent', () => {
  let component: GestionUserComponent
  let fixture: ComponentFixture<GestionUserComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionUserComponent]
    })
    fixture = TestBed.createComponent(GestionUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
