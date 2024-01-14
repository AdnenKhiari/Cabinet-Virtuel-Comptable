import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RelevesBancairesComponent } from './releves-bancaires.component'

describe('RelevesBancairesComponent', () => {
  let component: RelevesBancairesComponent
  let fixture: ComponentFixture<RelevesBancairesComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelevesBancairesComponent]
    })
    fixture = TestBed.createComponent(RelevesBancairesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
