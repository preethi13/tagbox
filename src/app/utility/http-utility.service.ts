import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpUtilityService {

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
  constructor(private httpClient: HttpClient) { }

  public getData(url: string): Observable<any> {
    return this.httpClient.get( url, this.httpOptions);
}
}


