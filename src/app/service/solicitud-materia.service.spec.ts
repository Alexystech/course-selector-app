import { TestBed } from '@angular/core/testing';

import { SolicitudMateriaService } from './solicitud-materia.service';

describe('SolicitudMateriaService', () => {
  let service: SolicitudMateriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudMateriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
