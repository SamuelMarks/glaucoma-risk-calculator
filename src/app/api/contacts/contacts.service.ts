import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Contact } from './contact';

@Injectable()
export class ContactsService {
  private headers: Headers;

  constructor(private authService, private http: Http) {
  }

  private setHeaders() {
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    if (this.authService.isLoggedIn())
      this.headers.append('X-Access-Token', this.authService.getAccessToken());
  }

  post(contact: Contact): Promise<Contact> {
    return this.http.post('/api/contact', JSON.stringify(contact), {headers: this.headers})
      .toPromise()
      .then((r: Response) => {
        return r.json() as Contact;
      })
      .catch(error => console.error(error))
  }

  get(): Promise<Contact[]> {
    return this.http.get('/api/contact', {headers: this.headers})
      .toPromise()
      .then((r: Response) => {
        return r.json().contacts as Contact[];
      })
      .catch(error => console.error(error))
  }
}
