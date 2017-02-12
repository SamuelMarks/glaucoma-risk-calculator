import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ng2-bootstrap/components/buttons';
import { LoginSignupComponent } from './login-signup.component';
import loginSignupRoutes from './login-signup.routes';
import { AuthService } from '../api/auth/auth.service';

@NgModule({
  imports: [CommonModule, loginSignupRoutes, ButtonsModule],
  providers: [AuthService],
  declarations: [LoginSignupComponent]
})

export default class LoginSignupModule {
}
