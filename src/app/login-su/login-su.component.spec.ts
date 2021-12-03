import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuComponent } from './login-su.component';

describe('LoginSuComponent', () => {
  let component: LoginSuComponent;
  let fixture: ComponentFixture<LoginSuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
