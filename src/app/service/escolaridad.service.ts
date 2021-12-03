import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EscolaridadService {

  baseUrl: string = environment.baseUrl + "/escolaridad";

  constructor(
    private httpClient: HttpClient
  ) { }

  public createEscolaridad(escolaridad: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/create", escolaridad);
  }

  public deleteEscolaridad(idEscolaridad: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/delete/" + idEscolaridad);
  }

  public updateEscolaridad(escolaridad: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + "/update", escolaridad);
  }

  public getEscolaridadById(idEscolaridad: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/" + idEscolaridad);
  }

  public getAllEscolaridades(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all");
  }

  public getEscolaridadesByIdDocente(idDocente: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/by/docente/" + idDocente);
  }
}
