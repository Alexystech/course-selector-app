import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DocenteDashboardComponent } from './docente-dashboard/docente-dashboard.component';
import { JefeDashboardComponent } from './jefe-dashboard/jefe-dashboard.component';
import { LoginDocenteComponent } from './login-docente/login-docente.component';
import { LoginJefeCarreraComponent } from './login-jefe-carrera/login-jefe-carrera.component';
import { LoginSuComponent } from './login-su/login-su.component';
import { RegisterCarreraComponent } from './register-carrera/register-carrera.component';
import { RegisterDocenteComponent } from './register-docente/register-docente.component';
import { RegisterJefeComponent } from './register-jefe/register-jefe.component';
import { SolicitudHorarioComponent } from './solicitud-horario/solicitud-horario.component';
import { SuDashboardComponent } from './su-dashboard/su-dashboard.component';

const routes: Routes = [
  { path: 'auth/login/jc', component: LoginJefeCarreraComponent },
  { path: 'auth/login/d', component: LoginDocenteComponent },
  { path: 'auth/login/su', component: LoginSuComponent },
  { path: 'su/dashboard/:idSuperUsuario', component: SuDashboardComponent },
  { path: 'registro/docente/:idSuperUsuario', component: RegisterDocenteComponent },
  { path: 'registro/jefe/:idSuperUsuario', component: RegisterJefeComponent },
  { path: 'd/dashboard/:idDocente', component: DocenteDashboardComponent },
  { path: 'jc/dashboard/:idJefeCarrera', component: JefeDashboardComponent },
  { path: 'solicitud/horario/:idDocente', component: SolicitudHorarioComponent },
  { path: 'registro/carrera/:idSuperUsuario', component: RegisterCarreraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
