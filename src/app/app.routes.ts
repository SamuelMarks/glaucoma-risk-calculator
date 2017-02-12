import { Routes } from '@angular/router';

export const rootRoutes: Routes = [
  {path: '', loadChildren: 'app/home/home.module#HomeModule'},
  {path: 'login-signup', loadChildren: 'app/login-signup/login-signup.module#LoginSignupModule'}
];

//export default RouterModule.forRoot(routes);
