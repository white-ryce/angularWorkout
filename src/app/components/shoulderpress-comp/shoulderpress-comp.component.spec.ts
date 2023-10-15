import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoulderpressCompComponent } from './shoulderpress-comp.component';

describe('ShoulderpressCompComponent', () => {
  let component: ShoulderpressCompComponent;
  let fixture: ComponentFixture<ShoulderpressCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoulderpressCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoulderpressCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
