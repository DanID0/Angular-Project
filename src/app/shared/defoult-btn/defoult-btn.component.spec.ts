import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefoultBtnComponent } from './defoult-btn.component';

describe('DefoultBtnComponent', () => {
  let component: DefoultBtnComponent;
  let fixture: ComponentFixture<DefoultBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefoultBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefoultBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
