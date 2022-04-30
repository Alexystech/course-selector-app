import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { DocenteService } from '../service/docente.service';

@Component({
  selector: 'app-login-docente',
  templateUrl: './login-docente.component.html',
  styleUrls: ['./login-docente.component.scss']
})
export class LoginDocenteComponent implements OnInit {

  docenteForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public docenteService: DocenteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.docenteForm = this.fb.group({
      idDocente: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login() {
    this.docenteService.loginDocente(this.docenteForm.value).subscribe(resp => {

      if (resp === true) {
        let idDocente: string = this.docenteForm.value.idDocente;
        this.router.navigate(['/d/dashboard', idDocente]);
      } else {
        this.router.navigate(['/auth/login/d'])
        this.docenteForm.reset();
        Swal.fire(
          'Error!',
          'Usuario o contraseña incorrectos!',
          'error'
        )
      }
    },
      error => { console.error(error) }
    );
  }

}
