import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class JefeService {

  baseUrl: string = environment.baseUrl + "/jefe-carrera";

  constructor(
    private httpClient: HttpClient
  ) { }

  public createJefeCarrera(jefeCarrera: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/create", jefeCarrera);
  }

  public deleteJefeCarreraById(idJefeCarrera: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/delete/" + idJefeCarrera);
  }

  public updateJefeCarrera(jefeCarrera: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + "/update", jefeCarrera);
  }

  public getJefeCarrera(idJefeCarrera: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/" + idJefeCarrera);
  }

  public getAllJefesCarrera(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all");
  }

  public loginJefe(jefeCarrera: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/auth/jefe-carrera", jefeCarrera);
  }

  public getJefesCarreraFilteredByIdJefeCarreraInCarreras(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/jefes-carrera/filtered/by/unsigned");
  }
}
