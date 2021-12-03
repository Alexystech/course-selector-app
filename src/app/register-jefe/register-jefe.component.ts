import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JefeService } from '../service/jefe.service';

@Component({
  selector: 'app-register-jefe',
  templateUrl: './register-jefe.component.html',
  styleUrls: ['./register-jefe.component.scss']
})
export class RegisterJefeComponent implements OnInit {

  registerForm!: FormGroup;
  idSuperUsuario: any = '';

  constructor(
    public fb: FormBuilder,
    public jefeService: JefeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idSuperUsuario = this.route.snapshot.paramMap.get('idSuperUsuario');

    this.registerForm = this.fb.group({
      idJefeCarrera: ['', Validators.required],
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
    this.jefeService.createJefeCarrera(this.registerForm.value).subscribe(resp => {
      this.registerForm.reset();
      this.router.navigate(['/su/dashboard/',this.idSuperUsuario]);
    },
      error => { console.error(error) }
    );
  }

}
