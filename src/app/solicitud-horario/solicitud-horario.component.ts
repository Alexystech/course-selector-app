import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsigHorarioService } from '../service/asig-horario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EscolaridadService } from '../service/escolaridad.service';
import { AsignaturaPorCarreraService } from '../service/asignatura-por-carrera.service';
import { SolicitudMateriaService } from '../service/solicitud-materia.service';

@Component({
  selector: 'app-solicitud-horario',
  templateUrl: './solicitud-horario.component.html',
  styleUrls: ['./solicitud-horario.component.scss']
})
export class SolicitudHorarioComponent implements OnInit {

  escolaridadForm!: FormGroup;
  solicitudMateriasForm!: FormGroup;

  idDocente: any = '';
  horasDisp!: horaDisp[];
  horasDia!: horaDia[];
  buttonAsigHorario!: boolean;
  
  miHorario: asigHorario[] = [];
  asignaturasDisponibles!: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public asigHorarioService: AsigHorarioService,
    public fb: FormBuilder,
    public escolaridadService: EscolaridadService,
    public asignaturaPorCarreraService: AsignaturaPorCarreraService,
    public solicitudMateriaService: SolicitudMateriaService
  ) { }

  ngOnInit(): void {
    this.idDocente = this.route.snapshot.paramMap.get('idDocente');
    this.getHoras();

    this.escolaridadForm = this.fb.group({
      cedulaProfecional: ['', Validators.required],
      carrera: ['', Validators.required],
      idDocente: ['', Validators.required]
    });

    this.solicitudMateriasForm = this.fb.group({
      docente: ['', Validators.required],
      asignaturaPorCarrera: ['', Validators.required]
    });

    this.asigHorarioService.existAnyAsigHorarioByDocenteId(this.idDocente).subscribe(resp => {
      this.buttonAsigHorario = !resp;
    },
    error => { console.error(error) }  
    );

    this.asignaturaPorCarreraService.getAllAsignaturasDisponibles().subscribe(resp => {
      this.asignaturasDisponibles = resp;
    },
    error => { console.error(error) }  
    );
  }

  register(): void {
    this.escolaridadService.createEscolaridad(this.escolaridadForm.value).subscribe(resp => {
      this.escolaridadForm.controls['cedulaProfecional'].reset();
      this.escolaridadForm.controls['carrera'].reset();
    },
      error => { console.error(error) }  
    );
  }

  registrarMaterias() {
    this.solicitudMateriaService.createSolicitud(this.solicitudMateriasForm.value).subscribe(resp => {
      this.solicitudMateriasForm.controls['asignaturaPorCarrera'].reset();
    },
      error => { console.error(error) }  
    );
  }

  onchange() {
    console.log(this.horasDia)
  }

  onSubmit() {
    this.horasDia.forEach(item => {
      if (item.hora_1.isselected==true) {
        let horario: asigHorario = new asigHorario(this.idDocente,item.hora_1.id);
        this.miHorario.push(horario);
      } 

      if (item.hora_2.isselected==true) {
        let horario: asigHorario = new asigHorario(this.idDocente,item.hora_2.id);
        this.miHorario.push(horario);
      }

      if (item.hora_3.isselected==true) {
        let horario: asigHorario = new asigHorario(this.idDocente,item.hora_3.id);
        this.miHorario.push(horario);
      }

      if (item.hora_4.isselected==true) {
        let horario: asigHorario = new asigHorario(this.idDocente,item.hora_4.id);
        this.miHorario.push(horario);
      }

      if (item.hora_5.isselected==true) {
        let horario: asigHorario = new asigHorario(this.idDocente,item.hora_5.id);
        this.miHorario.push(horario);
      }

      if (item.hora_6.isselected==true) {
        let horario: asigHorario = new asigHorario(this.idDocente,item.hora_6.id);
        this.miHorario.push(horario);
      }

      if (item.hora_7.isselected==true) {
        let horario: asigHorario = new asigHorario(this.idDocente,item.hora_7.id);
        this.miHorario.push(horario);
      }
    });

    this.miHorario.forEach(item => {
      this.asigHorarioService.createAsigHorario(item).subscribe(resp => {});
    });

    this.router.navigate(['/d/dashboard', this.idDocente]);
  }

  getHoras() {
    this.horasDisp=[
      { id: 1, dia: "Lunes", hora: "07:00:00", isselected: false },
      { id: 2, dia: "Lunes", hora: "09:00:00", isselected: false },
      { id: 3, dia: "Lunes", hora: "11:00:00", isselected: false },
      { id: 4, dia: "Lunes", hora: "13:00:00", isselected: false },
      { id: 5, dia: "Lunes", hora: "15:00:00", isselected: false },
      { id: 6, dia: "Lunes", hora: "17:00:00", isselected: false },
      { id: 7, dia: "Lunes", hora: "19:00:00", isselected: false },
      { id: 8, dia: "Martes", hora: "07:00:00", isselected: false },
      { id: 9, dia: "Martes", hora: "09:00:00", isselected: false },
      { id: 10, dia: "Martes", hora: "11:00:00", isselected: false },
      { id: 11, dia: "Martes", hora: "13:00:00", isselected: false },
      { id: 12, dia: "Martes", hora: "15:00:00", isselected: false },
      { id: 13, dia: "Martes", hora: "17:00:00", isselected: false },
      { id: 14, dia: "Martes", hora: "19:00:00", isselected: false },
      { id: 15, dia: "Miercoles", hora: "07:00:00", isselected: false },
      { id: 16, dia: "Miercoles", hora: "09:00:00", isselected: false },
      { id: 17, dia: "Miercoles", hora: "11:00:00", isselected: false },
      { id: 18, dia: "Miercoles", hora: "13:00:00", isselected: false },
      { id: 19, dia: "Miercoles", hora: "15:00:00", isselected: false },
      { id: 20, dia: "Miercoles", hora: "17:00:00", isselected: false },
      { id: 21, dia: "Miercoles", hora: "19:00:00", isselected: false },
      { id: 22, dia: "Jueves", hora: "07:00:00", isselected: false },
      { id: 23, dia: "Jueves", hora: "09:00:00", isselected: false },
      { id: 24, dia: "Jueves", hora: "11:00:00", isselected: false },
      { id: 25, dia: "Jueves", hora: "13:00:00", isselected: false },
      { id: 26, dia: "Jueves", hora: "15:00:00", isselected: false },
      { id: 27, dia: "Jueves", hora: "17:00:00", isselected: false },
      { id: 28, dia: "Jueves", hora: "19:00:00", isselected: false },
      { id: 29, dia: "Viernes", hora: "07:00:00", isselected: false },
      { id: 30, dia: "Viernes", hora: "09:00:00", isselected: false },
      { id: 31, dia: "Viernes", hora: "11:00:00", isselected: false },
      { id: 32, dia: "Viernes", hora: "13:00:00", isselected: false },
      { id: 33, dia: "Viernes", hora: "15:00:00", isselected: false },
      { id: 34, dia: "Viernes", hora: "17:00:00", isselected: false },
      { id: 35, dia: "Viernes", hora: "19:00:00", isselected: false },
    ];

    this.horasDia=[
      { dia: "Lunes", hora_1: this.horasDisp[0], hora_2: this.horasDisp[1], hora_3: this.horasDisp[2], hora_4: this.horasDisp[3], hora_5: this.horasDisp[4], hora_6: this.horasDisp[5], hora_7: this.horasDisp[6]},
      { dia: "Martes", hora_1: this.horasDisp[7], hora_2: this.horasDisp[8], hora_3: this.horasDisp[9], hora_4: this.horasDisp[10], hora_5: this.horasDisp[11], hora_6: this.horasDisp[12], hora_7: this.horasDisp[13]},
      { dia: "Miercoles", hora_1: this.horasDisp[14], hora_2: this.horasDisp[15], hora_3: this.horasDisp[16], hora_4: this.horasDisp[17], hora_5: this.horasDisp[18], hora_6: this.horasDisp[19], hora_7: this.horasDisp[20]},
      { dia: "Jueves", hora_1: this.horasDisp[21], hora_2: this.horasDisp[22], hora_3: this.horasDisp[23], hora_4: this.horasDisp[24], hora_5: this.horasDisp[25], hora_6: this.horasDisp[26], hora_7: this.horasDisp[27]},
      { dia: "Viernes", hora_1: this.horasDisp[28], hora_2: this.horasDisp[29], hora_3: this.horasDisp[30], hora_4: this.horasDisp[31], hora_5: this.horasDisp[32], hora_6: this.horasDisp[33], hora_7: this.horasDisp[34]},
    ];
  }

}

class horaDisp {
  id!: number;
  dia!: string;
  hora!: string;
  isselected!: boolean;

  constructor(id: number, dia: string, hora: string, isselected: boolean) {

  }

}

class horaDia {
  dia!: string;
  hora_1!: horaDisp;
  hora_2!: horaDisp;
  hora_3!: horaDisp;
  hora_4!: horaDisp;
  hora_5!: horaDisp;
  hora_6!: horaDisp;
  hora_7!: horaDisp;
}

class asigHorario {
  idDocente!: string;
  idHora!: number;

  constructor(idDocente: string, idHora: number) {
    this.idDocente = idDocente;
    this.idHora = idHora;
  }
}