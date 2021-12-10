import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SolicitudMateriaService {

  baseUrl: string = environment.baseUrl + "/solicitud/materia";

  constructor(
    private httpClient: HttpClient
  ) { }

  public createSolicitud(solicitudMateria: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/create", solicitudMateria);
  }

  public deleteSolicitud(idSolicitudMateria: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/delete/" + idSolicitudMateria);
  }

  public getSolicitudMateriaById(idSolicitudMateria: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/" + idSolicitudMateria);
  }

  public getAllSolicitudes(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all");
  }

  public getAllMateriasSolicitadas(idDocente: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/materias/solicitadas/by/" + idDocente);
  }
}
