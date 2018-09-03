import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

/**
 * this service will provide common entry/exit door to all external API's(REST)
 * it also provide abstraction to domain core servies, if required we can change some logic
 * here to get the data from other source i.e localstorage or WebSocket without changing the
 * domain/functional services
 */

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {
  /**
   * Required services injected.
   * @param http :HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * perform a GET request to the API, appending the given params
   * as URL search parameters. Returns an Observable stream.
   */
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, { params });
  }

  /**
   * perform a POST request to the API. Returns an Observable stream.
   */

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body));
  }

  /**
   * perform a DELETE request to the API. Returns an Observable stream.
   */

  delete(path): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`);
  }
}
