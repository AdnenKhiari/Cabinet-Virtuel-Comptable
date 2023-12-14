import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharteChargesComponent } from './charte-charges.component';

describe('CharteChargesComponent', () => {
  let component: CharteChargesComponent;
  let fixture: ComponentFixture<CharteChargesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharteChargesComponent]
    });
    fixture = TestBed.createComponent(CharteChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
