import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultyItemCaruselComponent } from './multy-item-carusel.component';

describe('MultyItemCaruselComponent', () => {
  let component: MultyItemCaruselComponent;
  let fixture: ComponentFixture<MultyItemCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultyItemCaruselComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultyItemCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
