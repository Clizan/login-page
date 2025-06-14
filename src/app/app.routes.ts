import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "singup",
        component: SingupComponent
    },
    {
        path: "user",
        component: UserComponent,
        canActivate: [AuthGuard]
    }
];
