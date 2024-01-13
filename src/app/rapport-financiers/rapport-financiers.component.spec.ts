import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RapportFinanciersComponent } from './rapport-financiers.component'

describe('RapportFinanciersComponent', () => {
  let component: RapportFinanciersComponent
  let fixture: ComponentFixture<RapportFinanciersComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RapportFinanciersComponent]
    })
    fixture = TestBed.createComponent(RapportFinanciersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
