import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { AlertsModule } from '../alerts/alerts.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, AlertsModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
