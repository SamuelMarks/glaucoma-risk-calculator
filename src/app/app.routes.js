"use strict";
exports.rootRoutes = [
    { path: '', loadChildren: 'app/home/home.module' },
    { path: 'login-signup', loadChildren: 'app/login-signup/login-signup.module' }
];
//export default RouterModule.forRoot(routes);
