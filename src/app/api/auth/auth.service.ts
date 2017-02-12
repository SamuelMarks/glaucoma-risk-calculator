import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './user';
import { AccessToken } from './access-token';

@Injectable()
export class AuthService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private accessToken: AccessToken;

  constructor(private http: Http) {
  }

  isLoggedIn(): boolean {
    console.info('this.getAccessToken() =', this.getAccessToken());
    return !!this.getAccessToken();
  }

  getAccessToken(): AccessToken {
    this.accessToken = this.accessToken ? this.accessToken : localStorage.getItem('access-token');
    return this.accessToken;
  }

  setAccessToken(accessToken?: AccessToken) {
    this.accessToken = !!accessToken ? accessToken : this.getAccessToken();
    localStorage.setItem('access-token', this.accessToken);
  }

  private logout(): void {
    delete this.accessToken;
    localStorage.removeItem('access-token');
  }

  post(user: User): Promise<Response> {
    return this.http.post('/api/auth', JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then((response: Response) => {
        this.setAccessToken(response.headers.get('x-access-token'));
        return response;
      })
      .catch(Promise.reject)
  }

  del(accessToken: AccessToken): Promise<Response> {
    const headers = this.headers;
    headers.append('x-access-token', accessToken);
    return this.http.delete('/api/auth', headers)
      .toPromise()
      .then((response: Response) => {
        if (response.status === 204) this.logout();
        return response;
      })
      .catch(Promise.reject)
  }
}
