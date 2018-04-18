import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
// import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'userdetails/:id',component:UserdetailsComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    // {
    //     path: 'register',
    //     component: RegisterComponent
    // },
    // {
    //     path: 'gymregister',
    //     //canActivate: [AuthGuard],
    //     component: GymDetailsComponent
    // },
    // {
    //     path: 'dashboard',
    //     //canActivate: [AuthGuard],
    //     component: DashboardComponent
    // },
    // { path: 'userDetails/:id', component: UserDetailsComponent }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
