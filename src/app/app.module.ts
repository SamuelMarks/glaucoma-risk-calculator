import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { rootRoutes } from './app.routes';
import { ServerStatusModule } from './server-status/server-status.module';
import { AlertsModule } from './alerts/alerts.module';
import { RiskQuizModule } from './risk-quiz/risk-quiz.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './api/auth/auth.service';
import { AuthGuard } from './api/auth/auth-guard.service';
import { AlertsService } from './alerts/alerts.service';
import { AppService } from './app.service';
import { RouterModule } from '@angular/router';
import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';


@NgModule({
  imports: [
    HomeModule, RouterModule, RouterModule.forRoot(rootRoutes),
    BrowserModule, HttpModule, FormsModule,
    ServerStatusModule, AlertsModule, RiskQuizModule, NavbarModule],
  declarations: [AppComponent, FooterComponent],
  providers: [AuthService, AuthGuard, AlertsService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
