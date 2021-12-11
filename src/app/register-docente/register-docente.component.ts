import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../service/docente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-docente',
  templateUrl: './register-docente.component.html',
  styleUrls: ['./register-docente.component.scss']
})
export class RegisterDocenteComponent implements OnInit {

  registerForm!: FormGroup;
  idSuperUsuario: any = '';

  constructor(
    public fb: FormBuilder,
    public docenteService: DocenteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idSuperUsuario = this.route.snapshot.paramMap.get('idSuperUsuario');

    this.registerForm = this.fb.group({
      idDocente: ['', Validators.required],
      password: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      rfc: ['', Validators.required],
      curp: ['', Validators.required],
      domicilio: ['', Validators.required],
      nss: ['', Validators.required]
    });
  }

  register(): void {
    this.docenteService.createDocente(this.registerForm.value).subscribe(resp => {
      this.registerForm.reset();
      this.router.navigate(['/su/dashboard/',this.idSuperUsuario]);

      Swal.fire(
        'OK',
        'Registrado!',
        'success'
      )
    },
      error => { console.error(error) }
    );
  }

}
