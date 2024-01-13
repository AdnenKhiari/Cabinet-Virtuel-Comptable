import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlistingComponent } from './userlisting.component';

describe('UserlistingComponent', () => {
  let component: UserlistingComponent;
  let fixture: ComponentFixture<UserlistingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserlistingComponent]
    });
    fixture = TestBed.createComponent(UserlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
