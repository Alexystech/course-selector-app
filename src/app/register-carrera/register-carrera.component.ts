import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarreraService } from '../service/carrera.service';
import { JefeService } from '../service/jefe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-carrera',
  templateUrl: './register-carrera.component.html',
  styleUrls: ['./register-carrera.component.scss']
})
export class RegisterCarreraComponent implements OnInit {

  idSuperUsuario: any;
  registerForm!: FormGroup;
  jefesCarrera: any;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public carreraService: CarreraService,
    public jefeService: JefeService
  ) { }

  ngOnInit(): void {
    this.idSuperUsuario = this.route.snapshot.paramMap.get('idSuperUsuario');

    this.registerForm = this.fb.group({
      nombreCarrera: ['', Validators.required],
      jefeCarrera: ['', Validators.required]
    });

    this.jefeService.getJefesCarreraFilteredByIdJefeCarreraInCarreras().subscribe(resp => {
      this.jefesCarrera = resp;
    });
  }

  register(): void {
    this.carreraService.createCarrera(this.registerForm.value).subscribe(resp => {
      this.registerForm.reset();

      Swal.fire(
        'OK',
        'Solicitado!',
        'success'
      );
    },
      error => { console.error(error) }
    );
  }

}
