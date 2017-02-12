import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Contact } from '../contacts/contact';

@Injectable()
export class ContactService {
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

  read(email: string): Promise<Contact> {
    return this.http.get(`/api/contact/${email}`, {headers: this.headers})
      .toPromise()
      .then((r: Response) => {
        return r.json() as Contact;
      })
      .catch(error => console.error(error))
  }

  update(oldContact: Contact, newContact: Contact): Promise<Contact> {
    return this.http.put(`/api/contact/${oldContact.email}`, JSON.stringify(newContact),
      {headers: this.headers})
      .toPromise()
      .then((r: Response) => {
        return r.json() as Contact;
      })
      .catch(error => console.error(error))
  }

  del(contact: Contact): Promise<void> {
    return this.http.delete(`/api/contact/${contact.email}`, {headers: this.headers})
      .toPromise()
      .then(r => {
        return;
      }).catch(error => console.error(error))
  }
}
