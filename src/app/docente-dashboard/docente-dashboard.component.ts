import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsigHorarioService } from '../service/asig-horario.service';
import { AsignacionHorarioDefService } from '../service/asignacion-horario-def.service';
import { EscolaridadService } from '../service/escolaridad.service';
import { SolicitudMateriaService } from '../service/solicitud-materia.service';

@Component({
  selector: 'app-docente-dashboard',
  templateUrl: './docente-dashboard.component.html',
  styleUrls: ['./docente-dashboard.component.scss']
})
export class DocenteDashboardComponent implements OnInit {

  idDocente: any = '';
  escolaridades: any;
  asignacionHorario: any;
  materiasSolicitadas: any;
  asignacionHorarioDef: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public escolaridadService: EscolaridadService,
    public asignacionHorarioService: AsigHorarioService,
    public asignacionHorarioDefService: AsignacionHorarioDefService,
    public solicitudMateriaService: SolicitudMateriaService
  ) { }

  ngOnInit(): void {
    this.idDocente = this.route.snapshot.paramMap.get('idDocente');

    this.escolaridadService.getEscolaridadesByIdDocente(this.idDocente).subscribe(resp => {
      this.escolaridades = resp;
    },
      error => { console.error(error) }
    );

    this.asignacionHorarioDefService.getAllAsignacionesByDocente(this.idDocente).subscribe(resp => {
      this.asignacionHorarioDef = resp;
    },
      error => { console.error(error) }
    );

    this.asignacionHorarioService.getAllAignacionesByIdDocente(this.idDocente).subscribe(resp => {
      this.asignacionHorario = resp;
    },
    error => { console.error(error) }
    );

    this.solicitudMateriaService.getAllMateriasSolicitadas(this.idDocente).subscribe(resp => {
      this.materiasSolicitadas = resp;
    },
      error => { console.error(error) }
    );
  }


}
