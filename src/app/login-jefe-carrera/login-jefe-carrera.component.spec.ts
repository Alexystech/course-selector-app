import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginJefeCarreraComponent } from './login-jefe-carrera.component';

describe('LoginJefeCarreraComponent', () => {
  let component: LoginJefeCarreraComponent;
  let fixture: ComponentFixture<LoginJefeCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginJefeCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginJefeCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
