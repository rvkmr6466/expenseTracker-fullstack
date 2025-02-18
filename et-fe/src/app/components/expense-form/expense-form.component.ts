import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Expense } from '../../models/expense.model';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../services/expense.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent {
  expenseForm: FormGroup;
  categories: Category[] = [];
  expenseId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.expenseForm = this.fb.group({
      name: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required],
      date: [new Date(), Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCategories();

    // Check if editing mode
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.expenseId = +id;
        this.loadExpense(this.expenseId);
      }
    });
  }

  loadExpense(id: number): void {
    this.expenseService.getExpenseById(id).subscribe((expense: Expense) => {
      this.expenseForm.patchValue({
        name: expense.name,
        amount: expense.amount,
        category: expense.category,
        date: this.formatDate(expense.date)
      });
    });
  }

  getCategories(): void {
    this.expenseService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  submitExpense() {
    const expenseData = {
      ...this.expenseForm.value,
      date: this.formatDate(this.expenseForm.value.date) // Format date
    };

    if (this.expenseForm.valid) {
      if (this.expenseId) {
        this.expenseService.updateExpense(this.expenseId, expenseData).subscribe(() => {
          this.router.navigate(['/expenses-list']);
        });
      } else {
        this.expenseService.createExpense(expenseData).subscribe(() => {
          this.router.navigate(['/expenses-list']);
        });
      }
    }
  }

  // Utility function to convert date to "yyyy-MM-dd" format
  formatDate(dateString: string | Date): string {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Extract only "yyyy-MM-dd"
  }
}
