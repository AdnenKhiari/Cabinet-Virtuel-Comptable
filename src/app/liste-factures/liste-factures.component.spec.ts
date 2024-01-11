import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ListeFacturesComponent } from './liste-factures.component'

describe('ListeFacturesComponent', () => {
  let component: ListeFacturesComponent
  let fixture: ComponentFixture<ListeFacturesComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeFacturesComponent]
    })
    fixture = TestBed.createComponent(ListeFacturesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
