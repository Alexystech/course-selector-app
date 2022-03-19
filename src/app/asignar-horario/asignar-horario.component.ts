import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsignacionHorarioDefService } from '../service/asignacion-horario-def.service';
import { HoraService } from '../service/hora.service';
import { SemestreService } from '../service/semestre.service';
import { AsignaturaPorCarreraService } from '../service/asignatura-por-carrera.service';
import { SolicitudMateriaService } from '../service/solicitud-materia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignar-horario',
  templateUrl: './asignar-horario.component.html',
  styleUrls: ['./asignar-horario.component.scss']
})
export class AsignarHorarioComponent implements OnInit {

  asignacionHorarioForm!: FormGroup;
  idJefeCarrera!: any;
  horas!: any;
  semestres!: any;
  asignaturasPorCarrera!: any;
  solicitudesPorMateria!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    public asignacionHorarioDefService: AsignacionHorarioDefService,
    public horaService: HoraService,
    public semestreService: SemestreService,
    public asignaturaPorCarreraService: AsignaturaPorCarreraService,
    public solicitudMateriaService: SolicitudMateriaService
  ) { }

  ngOnInit(): void {
    this.idJefeCarrera = this.route.snapshot.paramMap.get('idJefeCarrera');

    this.asignacionHorarioForm = this.fb.group({
      semestre: ['', Validators.required],
      idHora: ['', Validators.required],
      idAsignatura: ['', Validators.required],
      idDocente: ['', Validators.required]
    });

    this.horaService.getHorasNotSelected(this.idJefeCarrera).subscribe(resp => {
      this.horas = resp;
    },
      error => {console.error(error)}
    );

    this.semestreService.getAllSemestres().subscribe(resp => {
      this.semestres = resp;
    },
      error => {console.error(error)}
    );

  }

  asignarHorario() {
    var idAsignatura: number = +this.asignacionHorarioForm.controls['idAsignatura'].value;
    var idSemestre: number = +this.asignacionHorarioForm.controls['semestre'].value;

    this.asignacionHorarioForm.controls['idAsignatura'].setValue(idAsignatura);
    this.asignacionHorarioForm.controls['semestre'].setValue(idSemestre);

    this.asignacionHorarioDefService.createAsignacion(this.asignacionHorarioForm.value).subscribe(resp => {
      this.asignacionHorarioForm.reset();
    });

    Swal.fire(
      'OK',
      'Horario asignado!',
      'success'
    )

    this.router.navigate(['jc/dashboard', this.idJefeCarrera]);

  }

  onSelect(semestre: any) {
    console.log(semestre!.value);
    this.asignaturaPorCarreraService.getAsignaturasBySemestre(semestre!.value, this.idJefeCarrera).subscribe(resp => {
      this.asignaturasPorCarrera = resp;
    },
      error => {console.error(error)}
    );
  }

  onSelectAsignatura(idAsignatura: any) {
    this.solicitudMateriaService.getSolicitudesByMateria(idAsignatura!.value).subscribe(resp => {
      this.solicitudesPorMateria = resp;
    },
    error => {console.error(error)}
    );
  }

}
