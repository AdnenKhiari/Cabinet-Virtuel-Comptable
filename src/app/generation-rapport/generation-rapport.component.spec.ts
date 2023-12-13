import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerationRapportComponent } from './generation-rapport.component';

describe('GenerationRapportComponent', () => {
  let component: GenerationRapportComponent;
  let fixture: ComponentFixture<GenerationRapportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerationRapportComponent]
    });
    fixture = TestBed.createComponent(GenerationRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
