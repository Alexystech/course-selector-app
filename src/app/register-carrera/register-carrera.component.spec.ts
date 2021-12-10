import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCarreraComponent } from './register-carrera.component';

describe('RegisterCarreraComponent', () => {
  let component: RegisterCarreraComponent;
  let fixture: ComponentFixture<RegisterCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
