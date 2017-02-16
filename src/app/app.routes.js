"use strict";
var auth_guard_service_1 = require("./api/auth/auth-guard.service");
exports.rootRoutes = [
    { path: '', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'login-signup', loadChildren: 'app/login-signup/login-signup.module#LoginSignupModule' },
    { path: 'admin', loadChildren: 'app/dashboard/dashboard.module#DashboardModule', canActivate: [auth_guard_service_1.AuthGuard] }
];
