import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JefeService } from '../service/jefe.service';

@Component({
  selector: 'app-login-jefe-carrera',
  templateUrl: './login-jefe-carrera.component.html',
  styleUrls: ['./login-jefe-carrera.component.scss']
})
export class LoginJefeCarreraComponent implements OnInit {

  jefeForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public jefeService: JefeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.jefeForm = this.fb.group({
      idJefeCarrera: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login(): void {
    this.jefeService.loginJefe(this.jefeForm.value).subscribe(resp => {
      if (resp === true) {
        let idJefeCarrera: string = this.jefeForm.value.idJefeCarrera;
        this.router.navigate(['/jc/dashboard', idJefeCarrera]);
      } else {
        this.router.navigate(['/auth/login/jc']);
        this.jefeForm.reset();
      }
    },
      error => { console.error(error) }
    );
  }

}
