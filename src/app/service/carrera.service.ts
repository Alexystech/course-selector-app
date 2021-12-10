import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  baseUrl: string = environment.baseUrl + "/carrera"

  constructor(
    private httpClient: HttpClient
  ) { }

  public createCarrera(carrera: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/create", carrera);
  }

  public deleteCarreraById(idCarrera: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/delete/" + idCarrera);
  }

  public updateCarrera(carrera: any): Observable<any> {
    return this.httpClient.put(this.baseUrl + "/update", carrera);
  }

  public getCarreraById(idCarrera: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/" + idCarrera);
  }

  public getAllCarreras(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all");
  }
}
