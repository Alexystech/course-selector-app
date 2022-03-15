import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JefeService } from '../service/jefe.service';

@Component({
  selector: 'app-update-jefe-carrera',
  templateUrl: './update-jefe-carrera.component.html',
  styleUrls: ['./update-jefe-carrera.component.scss']
})
export class UpdateJefeCarreraComponent implements OnInit {

  updateForm!: FormGroup;
  idSuperUsuario: any = '';
  idJefeCarrera: any = '';
  jefeCarrera: any;

  constructor(
    public fb: FormBuilder,
    public jefeService: JefeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idSuperUsuario = this.route.snapshot.paramMap.get('idSuperUsuario');
    this.idJefeCarrera = this.route.snapshot.paramMap.get('idJefeCarrera');

    this.jefeService.getJefeCarreraById(this.idJefeCarrera).subscribe(resp => {
      this.jefeCarrera = resp;
    });

    this.updateForm = this.fb.group({
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

  update(): void {
    this.jefeService.updateJefeCarrera(this.updateForm.value).subscribe(resp => {
      this.updateForm.reset();
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
