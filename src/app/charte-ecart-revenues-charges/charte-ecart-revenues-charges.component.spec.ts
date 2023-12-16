import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CharteEcartRevenuesChargesComponent } from './charte-ecart-revenues-charges.component'

describe('CharteEcartRevenuesChargesComponent', () => {
  let component: CharteEcartRevenuesChargesComponent
  let fixture: ComponentFixture<CharteEcartRevenuesChargesComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharteEcartRevenuesChargesComponent]
    })
    fixture = TestBed.createComponent(CharteEcartRevenuesChargesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
