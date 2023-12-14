import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteResultatComponent } from './compte-resultat.component';

describe('CompteResultatComponent', () => {
  let component: CompteResultatComponent;
  let fixture: ComponentFixture<CompteResultatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompteResultatComponent]
    });
    fixture = TestBed.createComponent(CompteResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
