import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '../api/auth/auth-guard.service';

export const dashboardRoutes: Routes = [
  {path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard]}
];
