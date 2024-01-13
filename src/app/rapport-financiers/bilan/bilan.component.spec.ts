import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanComponent } from './bilan.component';

describe('BilanComponent', () => {
  let component: BilanComponent;
  let fixture: ComponentFixture<BilanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilanComponent]
    });
    fixture = TestBed.createComponent(BilanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
