import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HoraService {

  baseUrl: string = environment.baseUrl + "/hora";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllHoras(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all");
  }

  public getHorasNotSelected(idJefeCarrera: any): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/horas/not/selected/" + idJefeCarrera);
  }
}
