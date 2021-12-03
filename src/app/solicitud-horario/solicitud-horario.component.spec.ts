import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudHorarioComponent } from './solicitud-horario.component';

describe('SolicitudHorarioComponent', () => {
  let component: SolicitudHorarioComponent;
  let fixture: ComponentFixture<SolicitudHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudHorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
