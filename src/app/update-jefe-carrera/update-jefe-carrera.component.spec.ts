import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJefeCarreraComponent } from './update-jefe-carrera.component';

describe('UpdateJefeCarreraComponent', () => {
  let component: UpdateJefeCarreraComponent;
  let fixture: ComponentFixture<UpdateJefeCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateJefeCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJefeCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
