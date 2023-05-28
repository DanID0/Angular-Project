import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBtnComponent } from './navbar-btn.component';

describe('NavbarBtnComponent', () => {
  let component: NavbarBtnComponent;
  let fixture: ComponentFixture<NavbarBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
