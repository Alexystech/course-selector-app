import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterJefeComponent } from './register-jefe.component';

describe('RegisterJefeComponent', () => {
  let component: RegisterJefeComponent;
  let fixture: ComponentFixture<RegisterJefeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterJefeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterJefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
