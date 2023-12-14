import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuesClientsComponent } from './revenues-clients.component';

describe('RevenuesClientsComponent', () => {
  let component: RevenuesClientsComponent;
  let fixture: ComponentFixture<RevenuesClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevenuesClientsComponent]
    });
    fixture = TestBed.createComponent(RevenuesClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
