import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquatCompComponent } from './squat-comp.component';

describe('SquatCompComponent', () => {
  let component: SquatCompComponent;
  let fixture: ComponentFixture<SquatCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquatCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquatCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
