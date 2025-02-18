import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Expense } from '../models/expense.model';
import { Category } from '../models/category.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})

export class ExpenseService {
  public expenses = new BehaviorSubject<Expense[]>([]);
  private expenseAPI = 'http://localhost:8080/api/expenses';
  private categoryAPI = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient, private authService: AuthService) {
    if (this.authService.isAuthenticated()) {
      this.loadExpenses(); // Load expenses initially
    }
  }

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.expenseAPI);
  }

  loadExpenses(): void {
    this.getExpenses().subscribe({
      next: (data) => {
        this.expenses.next(data); // Correctly updating BehaviorSubject
      },
      error: (error) => {
        console.error('Error fetching expenses:', error);
      },
    });
  }

  getExpensesObservable(): Observable<Expense[]> {
    return this.expenses.asObservable();
  }

  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.expenseAPI, expense);
  }

  updateExpense(expenseId: number, expense: Expense): Observable<Expense> {
    return this.http.put<Expense>(`${this.expenseAPI}/${expenseId}`, expense).pipe(
      tap(() => this.loadExpenses()) // Refresh after updating
    );
  }

  deleteExpense(id: number): Observable<void> {
    return this.http.delete<void>(`${this.expenseAPI}/${id}`).pipe(
      tap(() => this.loadExpenses()) // Refresh after deleting
    );
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryAPI);
  }

  getExpenseById(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.expenseAPI}/${id}`);
  }

  createExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.expenseAPI, expense);
  }

}