import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuService {

  baseUrl: string = environment.baseUrl + "/super-usuario";

  constructor(
    private httpClient: HttpClient
  ) { }

  public loginSU(su: any): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/auth/su", su);
  }

}
