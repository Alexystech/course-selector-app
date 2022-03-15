import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsignacionHorarioDefService {

  baseUrl: string = environment.baseUrl + "/asignacion";

  constructor(
    private httpClient: HttpClient
  ) { }

  public createAsignacion(asignacionHorario: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/create", asignacionHorario);
  }

  public deleteAsignacionById(idAsignacion: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/delete/" + idAsignacion);
  }

  public updateAsignacion(asignacionHorario: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + "/update", asignacionHorario);
  }

  public getAsignacionById(idAsignacion: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/" + idAsignacion);
  }

  public getAllAsignaciones(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all");
  }

  public getAllAsignacionesByDocente(idDocente: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all/asignaciones/by/docente/" + idDocente);
  }

  public getAsigHorarioDefByJefeCarrera(idJefeCarrera: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/asig/def/by/jefe/carrera/" + idJefeCarrera);
  }
}
