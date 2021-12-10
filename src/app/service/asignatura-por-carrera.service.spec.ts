import { TestBed } from '@angular/core/testing';

import { AsignaturaPorCarreraService } from './asignatura-por-carrera.service';

describe('AsignaturaPorCarreraService', () => {
  let service: AsignaturaPorCarreraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignaturaPorCarreraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
