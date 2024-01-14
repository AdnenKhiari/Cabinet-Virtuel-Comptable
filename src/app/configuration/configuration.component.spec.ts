import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ConfigurationComponent } from './configuration.component'

describe('ConfigurationComponent', () => {
  let component: ConfigurationComponent
  let fixture: ComponentFixture<ConfigurationComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurationComponent]
    })
    fixture = TestBed.createComponent(ConfigurationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
