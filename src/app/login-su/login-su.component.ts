import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuService } from '../service/su.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-su',
  templateUrl: './login-su.component.html',
  styleUrls: ['./login-su.component.scss']
})
export class LoginSuComponent implements OnInit {

  suForm!: FormGroup;

  constructor(
    public fb: FormBuilder,
    public suService: SuService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.suForm = this.fb.group({
      idSuperUsuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login(): void {
    this.suService.loginSU(this.suForm.value).subscribe(resp => {

      if (resp === true) {
        let idSuperUsuario: string = this.suForm.value.idSuperUsuario;
        this.router.navigate(['/su/dashboard', idSuperUsuario]);
      } else {
        this.router.navigate(['/auth/login/su']);
        this.suForm.reset();
      }
    },
      error => { console.error(error) }
    );
  }

}
