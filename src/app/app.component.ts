import { Component } from '@angular/core';
import { AuthService } from './api/auth/auth.service';
import { AppService } from './app.service';
import { AlertsService } from './alerts/alerts.service';
import { AlertsModule } from './alerts/alerts.module';

@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(public authService: AuthService,
              public appService: AppService,
              public alertsService: AlertsService,
              public alertsModule: AlertsModule) {
  }

  logout() {
    this.authService.del(this.authService.getAccessToken()).then(null).catch(null);
  }

  addAlert() {
    this.alertsService.add({
      type: 'stock',
      msg: 'Foo'
    });
  }
}
