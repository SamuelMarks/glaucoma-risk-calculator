"use strict";
var router_1 = require('@angular/router');
var routes = [
    { path: '', loadChildren: 'app/home/home.module' },
    { path: 'login-signup', loadChildren: 'app/login-signup/login-signup.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(routes);
