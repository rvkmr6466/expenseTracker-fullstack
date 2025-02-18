import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent),
        canActivate: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then(mod => mod.RegisterComponent),
    },
    {
        path: 'expenses/add',
        loadComponent: () => import('./components/expense-form/expense-form.component').then(mod => mod.ExpenseFormComponent),
        canActivate: [AuthGuard]
    },
    {
        path: 'expenses/edit/:id',
        loadComponent: () => import('./components/expense-form/expense-form.component').then(mod => mod.ExpenseFormComponent),
        canActivate: [AuthGuard]
    },
    {
        path: 'expenses-list',
        loadComponent: () => import('./components/expense-list/expense-list.component').then(mod => mod.ExpenseListComponent),
        canActivate: [AuthGuard]
    },
    { path: '**', redirectTo: 'login' }
];
