import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionCaruselComponent } from './position-carusel.component';

describe('PositionCaruselComponent', () => {
  let component: PositionCaruselComponent;
  let fixture: ComponentFixture<PositionCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionCaruselComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
