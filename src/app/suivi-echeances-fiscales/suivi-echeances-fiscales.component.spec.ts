import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SuiviEcheancesFiscalesComponent } from './suivi-echeances-fiscales.component'

describe('SuiviEcheancesFiscalesComponent', () => {
  let component: SuiviEcheancesFiscalesComponent
  let fixture: ComponentFixture<SuiviEcheancesFiscalesComponent>
  // Setup: This function runs before each test case
  beforeEach(() => {
    // Configure TestBed to create a testing module with SuiviEcheancesFiscalesComponent
    TestBed.configureTestingModule({
      declarations: [SuiviEcheancesFiscalesComponent]
      // Create a component fixture and obtain a reference to the component instance
    })
    fixture = TestBed.createComponent(SuiviEcheancesFiscalesComponent)  
    component = fixture.componentInstance

    // Trigger change detection to initialize the component
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
    //checks whether the component is created successfully and returns components if component instance is truthy
  })
})1
