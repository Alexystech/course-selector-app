import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SemestreService {

  baseUrl: string = environment.baseUrl + "/semestre";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllSemestres(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get/all");
  }
  
}
