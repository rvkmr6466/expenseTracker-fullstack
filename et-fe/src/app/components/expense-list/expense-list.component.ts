import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit, OnChanges {
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService, private router: Router) {
    this.expenseService.loadExpenses();
    this.expenseService.getExpensesObservable().subscribe(
      data => this.expenses = data
    );
  }

  ngOnInit(): void {
  }

  ngOnChanges(_changes: SimpleChanges): void {
    console.log(_changes);
  }

  onDelete(id: number): void {
    this.expenseService.deleteExpense(id).subscribe();
  }

  onEdit(id: number) {
    this.router.navigate(['/expenses/edit', id]);
  }

  openAddExpenseModal() {
    console.log("Floating button clicked! Open modal here.");
    this.router.navigate(['/expenses/add']);
  }


}
