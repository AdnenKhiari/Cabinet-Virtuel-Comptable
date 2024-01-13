import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NotificationSystemComponent } from './notification-system.component'

describe('NotificationSystemComponent', () => {
  let component: NotificationSystemComponent
  let fixture: ComponentFixture<NotificationSystemComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationSystemComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(NotificationSystemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
