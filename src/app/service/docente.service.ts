import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  baseUrl: string = environment.baseUrl + "/docente";

  constructor(
    private httpClient: HttpClient
  ) { }

  public createDocente(docente: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/create", docente);
  }

  public deleteDocenteById(idDocente: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/delte/" + idDocente);
  }

  public updateDocente(docente: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + "/update", docente);
  }

  public getDocenteById(idDocente: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/" + idDocente);
  }

  public getAllDocentes(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all");
  }

  public loginDocente(docente: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/auth/docente", docente);
  }

}
