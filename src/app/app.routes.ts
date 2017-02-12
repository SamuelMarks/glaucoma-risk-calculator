import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: 'app/home/home.module'},
  {path: 'login-signup', loadChildren: 'app/login-signup/login-signup.module'}
  /*,
   {path: 'dynamic-renderer', loadChildren: 'app/dynamic-renderer/dynamic-renderer.module'}*/
];

export default RouterModule.forRoot(routes);
