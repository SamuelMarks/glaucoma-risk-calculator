import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router: Router) {
  }

  goto(to: string) {
    this.router.navigate([to]).then(
      success => success && console.info('state changed') || console.info('state didn\'t change'),
      error => console.error(error)
    );
  }
}
