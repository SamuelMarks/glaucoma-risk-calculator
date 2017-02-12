import { Component, ViewChild } from '@angular/core';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/filter';
import { AuthService } from '../api/auth/auth.service';
import { User } from '../api/auth/user';
import { Router } from '@angular/router';
import { AlertsService } from '../alerts/alerts.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent /*implements AfterViewInit*/ {
  @ViewChild('formRef') form;

  constructor(private router: Router, private authService: AuthService, private alertsService: AlertsService) {
  }

  onSubmit(user: User): void {
    console.log('LoginSignupComponent::onSubmit::user =', user);
    debugger;
    this.authService.post(user).then(response => {
      if (!this.authService.isLoggedIn()) {
        console.info("response.json() = ", JSON.stringify(response.json()));
        this.alertsService.alerts.push({msg: JSON.stringify(response.json()), type: 'warning'});
        return;
      }
      console.info("this.authService.getAccessToken() =", this.authService.getAccessToken());
      this.alertsService.alerts.push({msg: `Logged in with ${this.authService.getAccessToken()}`, type: 'success'});
      this.router.navigate(['/contacts'])
    }).catch(error => this.alertsService.alerts.push({msg: error, type: 'danger'}));
  }

  /*ngAfterViewInit() {
   Observable.combineLatest(
   this.form.statusChanges, this.form.valueChanges,
   (status, value) => ({status, value})
   )
   .filter(({status})=> status === 'VALID')
   .subscribe(({value})=> console.table(value));
   }*/
}
