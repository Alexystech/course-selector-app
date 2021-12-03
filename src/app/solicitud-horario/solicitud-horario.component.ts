import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AsigHorarioService } from '../service/asig-horario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EscolaridadService } from '../service/escolaridad.service';

@Component({
  selector: 'app-solicitud-horario',
  templateUrl: './solicitud-horario.component.html',
  styleUrls: ['./solicitud-horario.component.scss']
})
export class SolicitudHorarioComponent implements OnInit {

  escolaridadForm!: FormGroup;

  idDocente: any = '';
  horasDisp!: horaDisp[];
  horasDia!: horaDia[];
  buttonAsigHorario!: boolean;
  
  miHorario: asigHorario[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public asigHorarioService: AsigHorarioService,
    public fb: FormBuilder,
    public escolaridadService: EscolaridadService
  ) { }

  ngOnInit(): void {
    this.idDocente = this.route.snapshot.paramMap.get('idDocente');
    this.getHoras();

    this.escolaridadForm = this.fb.group({
      cedulaProfecional: ['', Validators.required],
      carrera: ['', Validators.required],
      idDocente: ['', Validators.required]
    });

    this.asigHorarioService.existAnyAsigHorarioByDocenteId(this.idDocente).subscribe(resp => {
      this.buttonAsigHorario = !resp;
    });
  }

  register(): void {
    this.escolaridadService.createEscolaridad(this.escolaridadForm.value).subscribe(resp => {
      this.escolaridadForm.reset();
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
      { id: 41, dia: "Lunes", hora: "07:00:00", isselected: false },
      { id: 42, dia: "Lunes", hora: "09:00:00", isselected: false },
      { id: 43, dia: "Lunes", hora: "11:00:00", isselected: false },
      { id: 44, dia: "Lunes", hora: "13:00:00", isselected: false },
      { id: 45, dia: "Lunes", hora: "15:00:00", isselected: false },
      { id: 46, dia: "Lunes", hora: "17:00:00", isselected: false },
      { id: 47, dia: "Lunes", hora: "19:00:00", isselected: false },
      { id: 48, dia: "Martes", hora: "07:00:00", isselected: false },
      { id: 49, dia: "Martes", hora: "09:00:00", isselected: false },
      { id: 50, dia: "Martes", hora: "11:00:00", isselected: false },
      { id: 51, dia: "Martes", hora: "13:00:00", isselected: false },
      { id: 52, dia: "Martes", hora: "15:00:00", isselected: false },
      { id: 53, dia: "Martes", hora: "17:00:00", isselected: false },
      { id: 54, dia: "Martes", hora: "19:00:00", isselected: false },
      { id: 55, dia: "Miercoles", hora: "07:00:00", isselected: false },
      { id: 56, dia: "Miercoles", hora: "09:00:00", isselected: false },
      { id: 57, dia: "Miercoles", hora: "11:00:00", isselected: false },
      { id: 58, dia: "Miercoles", hora: "13:00:00", isselected: false },
      { id: 59, dia: "Miercoles", hora: "15:00:00", isselected: false },
      { id: 60, dia: "Miercoles", hora: "17:00:00", isselected: false },
      { id: 61, dia: "Miercoles", hora: "19:00:00", isselected: false },
      { id: 62, dia: "Jueves", hora: "07:00:00", isselected: false },
      { id: 63, dia: "Jueves", hora: "09:00:00", isselected: false },
      { id: 64, dia: "Jueves", hora: "11:00:00", isselected: false },
      { id: 65, dia: "Jueves", hora: "13:00:00", isselected: false },
      { id: 66, dia: "Jueves", hora: "15:00:00", isselected: false },
      { id: 67, dia: "Jueves", hora: "17:00:00", isselected: false },
      { id: 68, dia: "Jueves", hora: "19:00:00", isselected: false },
      { id: 69, dia: "Viernes", hora: "07:00:00", isselected: false },
      { id: 70, dia: "Viernes", hora: "09:00:00", isselected: false },
      { id: 71, dia: "Viernes", hora: "11:00:00", isselected: false },
      { id: 72, dia: "Viernes", hora: "13:00:00", isselected: false },
      { id: 73, dia: "Viernes", hora: "15:00:00", isselected: false },
      { id: 74, dia: "Viernes", hora: "17:00:00", isselected: false },
      { id: 75, dia: "Viernes", hora: "19:00:00", isselected: false },
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