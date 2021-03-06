import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from 'ng2-bootstrap';
import { LoginSignupComponent } from './login-signup.component';
import { AuthService } from '../api/auth/auth.service';
import { loginSignupRoutes } from './login-signup.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(loginSignupRoutes), ButtonsModule],
  providers: [AuthService],
  declarations: [LoginSignupComponent]
})

export class LoginSignupModule {
}
