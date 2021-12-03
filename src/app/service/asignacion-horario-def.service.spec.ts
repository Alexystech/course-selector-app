import { TestBed } from '@angular/core/testing';

import { AsignacionHorarioDefService } from './asignacion-horario-def.service';

describe('AsignacionHorarioDefService', () => {
  let service: AsignacionHorarioDefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignacionHorarioDefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
