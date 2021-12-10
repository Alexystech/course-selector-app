import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsigHorarioService {

  baseUrl: string = environment.baseUrl + "/asignacion-horario";

  constructor(
    private httpClient: HttpClient
  ) { }

  public createAsigHorario(asigHorario: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/create", asigHorario);
  }

  public getAllAsignacionesHorario(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all");
  }

  public existAnyAsigHorarioByDocenteId(idDocente: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/exist/any/asignacion/horario/by/docente/" + idDocente);
  }

  public getAllAignacionesByIdDocente(idDocente: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all/asignacion/by/docente/" + idDocente);
  }

  public getTopDocentesMayorDisponibilidad(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/top/docentes");
  }
}
