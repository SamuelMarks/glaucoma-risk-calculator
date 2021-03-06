import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { AlertsService } from '../../alerts/alerts.service';
import { handleError } from '../service-utils';
import { AccessToken } from './access-token';
import { User } from './user';

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
        return response.json()
      })
      .catch(handleError);
  }

  del(redirect_uri?: string): Observable<Response> {
    this.redirect_uri = redirect_uri;

    const logout = () => {
      this.accessToken = null;
      delete this._accessToken;
      localStorage.removeItem('access-token');
    };

    this.headers.set('x-access-token', this.accessToken);
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
        return handleError(error)
      })
  }

  redirOnResIfUnauth(error) {
    return error.error_message && error.error_message === "Nothing associated with that access token" && this.del(window.location.hash).subscribe(
        _ => this.router.navigateByUrl('/login-signup'), console.error)
  }
}
