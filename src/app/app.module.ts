import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NvarComponent } from './nvar/nvar.component';
import { LoginJefeCarreraComponent } from './login-jefe-carrera/login-jefe-carrera.component';
import { LoginDocenteComponent } from './login-docente/login-docente.component';
import { LoginSuComponent } from './login-su/login-su.component';
import { SuDashboardComponent } from './su-dashboard/su-dashboard.component';
import { RegisterDocenteComponent } from './register-docente/register-docente.component';
import { RegisterJefeComponent } from './register-jefe/register-jefe.component';
import { DocenteDashboardComponent } from './docente-dashboard/docente-dashboard.component';
import { JefeDashboardComponent } from './jefe-dashboard/jefe-dashboard.component';
import { SolicitudHorarioComponent } from './solicitud-horario/solicitud-horario.component';
import { RegisterCarreraComponent } from './register-carrera/register-carrera.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AsignarHorarioComponent } from './asignar-horario/asignar-horario.component';
import { UpdateDocenteComponent } from './update-docente/update-docente.component';
import { UpdateJefeCarreraComponent } from './update-jefe-carrera/update-jefe-carrera.component';

@NgModule({
  declarations: [
    AppComponent,
    NvarComponent,
    LoginJefeCarreraComponent,
    LoginDocenteComponent,
    LoginSuComponent,
    SuDashboardComponent,
    RegisterDocenteComponent,
    RegisterJefeComponent,
    DocenteDashboardComponent,
    JefeDashboardComponent,
    SolicitudHorarioComponent,
    RegisterCarreraComponent,
    AsignarHorarioComponent,
    UpdateDocenteComponent,
    UpdateJefeCarreraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
