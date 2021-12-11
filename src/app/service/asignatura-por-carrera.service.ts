import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaPorCarreraService {

  baseUrl: string = environment.baseUrl + "/asignatura-por-carrera";

  constructor(
    private httpClient: HttpClient
  ) { }

  public createAsignatura(asigPorCarrera: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/create", asigPorCarrera);
  }

  public deleteAsigPorCarreraById(idAsigPorCarrera: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/delete/" + idAsigPorCarrera);
  }

  public getAsigPorCarreraById(idAsigPorCarrera: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/" + idAsigPorCarrera);
  }

  public getAllAsignaturas(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all");
  }

  public getAllAsignaturasDisponibles(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all/asignaturas/disponibles");
  }

  public getAsignaturasBySemestre(semestre: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/asignaturas/by/" + semestre);
  }

}
