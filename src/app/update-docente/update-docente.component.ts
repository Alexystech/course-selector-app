import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DocenteService } from '../service/docente.service';

@Component({
  selector: 'app-update-docente',
  templateUrl: './update-docente.component.html',
  styleUrls: ['./update-docente.component.scss']
})
export class UpdateDocenteComponent implements OnInit {

  updateForm!: FormGroup;
  idSuperUsuario: any = '';
  idDocente: any = '';
  docente: any;

  constructor(
    public fb: FormBuilder,
    public docenteService: DocenteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idSuperUsuario = this.route.snapshot.paramMap.get('idSuperUsuario');
    this.idDocente = this.route.snapshot.paramMap.get('idDocente');
    
    this.docenteService.getDocenteById(this.idDocente).subscribe(resp => {
      this.docente = resp;
    },
      error => { console.error(error) }
    );

    this.updateForm = this.fb.group({
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

  update(): void {
    this.docenteService.updateDocente(this.updateForm.value).subscribe(resp => {

      this.updateForm.reset();
      this.router.navigate(['/su/dashboard/',this.idSuperUsuario]);

      Swal.fire(
        'OK',
        'Actualizado!',
        'success'
      )
    },
      error => { console.error(error) }
    )
  }

}
