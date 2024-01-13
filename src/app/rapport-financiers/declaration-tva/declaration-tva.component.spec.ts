import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationTvaComponent } from './declaration-tva.component';

describe('DeclarationTvaComponent', () => {
  let component: DeclarationTvaComponent;
  let fixture: ComponentFixture<DeclarationTvaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeclarationTvaComponent]
    });
    fixture = TestBed.createComponent(DeclarationTvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
