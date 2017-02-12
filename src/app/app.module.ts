import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import appRoutes from './app.routes';
import ServerStatusModule from './server-status/server-status.module';
import { AuthGuard } from './api/auth/auth-guard.service';
import { AuthService } from './api/auth/auth.service';
import { AlertModule } from 'ng2-bootstrap/components/alert';
import { AlertsService } from './alerts/alerts.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AlertsModule } from './alerts/alerts.module';
import { AppService } from './app.service';
import { RiskQuizModule } from './risk-quiz/risk-quiz.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule, appRoutes, HttpModule, ServerStatusModule, AlertModule, AlertsModule, RiskQuizModule, FormsModule],
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  providers: [AuthService, AuthGuard, AlertsService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
