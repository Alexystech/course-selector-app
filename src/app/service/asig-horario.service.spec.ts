import { TestBed } from '@angular/core/testing';

import { AsigHorarioService } from './asig-horario.service';

describe('AsigHorarioService', () => {
  let service: AsigHorarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsigHorarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
