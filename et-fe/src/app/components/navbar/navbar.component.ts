import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
    public totalExpenses: number = 0;
    isExpenseListPage: boolean = false;
    isLoginPage: boolean = false;
    isRegisterPage: boolean = false;

    constructor(
        private router: Router,
        private authService: AuthService,
        private expenseService: ExpenseService) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: NavigationEnd) => {
            this.isExpenseListPage = event.url === '/expenses-list';
            this.isLoginPage = event.url === '/login';
            this.isRegisterPage = event.url === '/register';
        });
    }

    ngOnInit() {
        this.isExpenseListPage = this.router.url === '/specific page';
        this.isLoginPage = this.router.url === '/login';
        this.isRegisterPage = this.router.url === '/register';

        this.expenseService.getExpensesObservable().subscribe({
            next: (data) => {
                this.getTotal(data);
            },
            error: (error) => {
                console.error('Error loading expenses:', error);
            }
        });
    }

    getTotal(expenseData: Expense[]): void {
        this.totalExpenses = expenseData.reduce((sum, expense) => sum + expense.amount, 0);
    }

    goToHome() {
        console.log("Home button clicked!");
        this.router.navigateByUrl('home');
    }

    register() {
        console.log("Register button clicked!");
        this.router.navigateByUrl('register');
    }

    login() {
        console.log("Login button clicked!");
        this.router.navigateByUrl('login');
    }

    expenseList() {
        this.router.navigateByUrl('expenses-list');
    }

    isLoggedIn(): boolean {
        return this.authService.isAuthenticated();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }
    
}
