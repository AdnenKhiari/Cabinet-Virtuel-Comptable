import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ComptablesComponent } from './comptables.component'

describe('ComptablesComponent', () => {
  let component: ComptablesComponent
  let fixture: ComponentFixture<ComptablesComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComptablesComponent]
    })
    fixture = TestBed.createComponent(ComptablesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
