import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauDeBordComponent } from './tableau-de-bord.component';

describe('TableauDeBordComponent', () => {
  let component: TableauDeBordComponent;
  let fixture: ComponentFixture<TableauDeBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableauDeBordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableauDeBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
