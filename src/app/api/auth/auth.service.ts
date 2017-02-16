import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './user';
import { AccessToken } from './access-token';
import { Observable } from 'rxjs';
import { AlertsService } from '../../alerts/alerts.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private _accessToken: AccessToken;
  private redirect_uri: string;

  constructor(private http: Http, private router: Router,
              private alertsService: AlertsService) {
  }

  isLoggedIn(): boolean {
    console.info('this.getAccessToken() =', this.accessToken);
    return !!this.accessToken;
  }

  redirUnauth(redirect_uri?: string) {
    if (this.isLoggedIn()) return;

    this.redirect_uri = redirect_uri;
    this.router.navigate(['login-signup']).then(
      success => success ? console.info('state changed') : this.alertsService.alerts.push(
          {msg: 'state didn\'t change', type: 'warning'}),
      err => this.alertsService.alerts.push({msg: err, type: 'danger'}));
  }

  get accessToken(): AccessToken {
    this._accessToken = this._accessToken ? this._accessToken : localStorage.getItem('access-token');
    return this._accessToken;
  }

  set accessToken(val: AccessToken) {
    this._accessToken = !!val ? val : this._accessToken;
    localStorage.setItem('access-token', this.accessToken);
  }

  post(user: User): Observable<User> {
    const options = new RequestOptions({headers: this.headers});
    return this.http.post('/api/auth', JSON.stringify(user), options)
      .map(response => {
        this.accessToken = response.headers.get('x-access-token');
        return response
      })
      .map(AuthService.extractData)
      .catch(AuthService.handleError);
  }

  del(): Observable<Response> {
    const logout = () => {
      this.accessToken = null;
      delete this._accessToken;
      localStorage.removeItem('access-token');
    };

    if (this.headers.has('x-access-token'))
      this.headers.delete('x-access-token');
    this.headers.append('x-access-token', this.accessToken);
    if (!this.headers.get('x-access-token')) return Observable.throw('No access token');

    const options = new RequestOptions({headers: this.headers});
    return this.http.delete('/api/auth', options)
      .map((response: Response) => {
        if (response.status === 204) {
          logout();
        } else {
          Observable.throw(new Error(`Expected response.status of 204 got ${response.status}.
           Body: ${response.text()}`))
        }
        return response;
      })
      .catch((error: Response) => {
        logout();
        console.error(error.json());
        return AuthService.handleError(error)
      })
  }

  private static extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  private static handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
