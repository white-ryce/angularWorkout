import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadliftCompComponent } from './deadlift-comp.component';

describe('DeadliftCompComponent', () => {
  let component: DeadliftCompComponent;
  let fixture: ComponentFixture<DeadliftCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadliftCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeadliftCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
