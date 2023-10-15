import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchpressCompComponent } from './benchpress-comp.component';

describe('BenchpressCompComponent', () => {
  let component: BenchpressCompComponent;
  let fixture: ComponentFixture<BenchpressCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchpressCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchpressCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
