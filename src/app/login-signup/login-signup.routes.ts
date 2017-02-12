import {RouterModule, Routes} from '@angular/router';
import {LoginSignupComponent} from './login-signup.component';

const routes: Routes = [
  {path: '', component: LoginSignupComponent}
];

export default RouterModule.forChild(routes);
