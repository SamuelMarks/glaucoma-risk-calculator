import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import homeRoutes from './home.routes';
import { SidebarModule } from '../sidebar/sidebar.module';
import { AlertsModule } from '../alerts/alerts.module';
import { RiskQuizModule } from '../risk-quiz/risk-quiz.module';


@NgModule({
  imports: [CommonModule, homeRoutes, SidebarModule, AlertsModule, RiskQuizModule],
  declarations: [HomeComponent]
})
export default class HomeModule {
}
