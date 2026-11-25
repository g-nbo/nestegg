// ==============================
// Transactions
// Owner: Elias
// ==============================

// The six expense categories (SRS Table 1)
const EXPENSE_CATEGORIES = ["Food", "Rent", "Gas", "School", "Fun", "Other"];

// Turn a dollar amount into whole cents so adding money has no rounding errors
function toCents(amount) {
  return Math.round(Number(amount) * 100);
}

class Transaction {
  constructor(id, type, amount, date, category, note) {
    this.id = String(id);
    this.type = type; // "Income" or "Expense"
    this.amount = toCents(amount) / 100; // rounded to 2 decimal places
    this.date = date; // "YYYY-MM-DD"
    this.category = type === "Income" ? "" : category; // empty for income
    this.note = note ? String(note).slice(0, 50) : ""; // optional, up to 50 characters
  }
}

class TransactionManager {
  constructor() {
    this.transactions = [];
  }

  // Add a new transaction to the list
  add(transaction) {
    // Turn plain objects (like ones loaded from localStorage) into Transactions
    const t = new Transaction(transaction.id, transaction.type, transaction.amount,
      transaction.date, transaction.category, transaction.note);

    // If the id is already used (two adds in the same millisecond), make it unique
    while (this.transactions.some((existing) => existing.id === t.id)) {
      t.id = String(Number(t.id) + 1);
    }

    this.transactions.push(t);
    return t;
  }

  // Replace an existing transaction that has the same id.
  // Only the amount, date, category, and note can change (FR-6); the id and type stay the same.
  update(id, updatedTransaction) {
    const index = this.transactions.findIndex((t) => t.id === String(id));
    if (index === -1) {
      return false;
    }

    const old = this.transactions[index];
    this.transactions[index] = new Transaction(old.id, old.type, updatedTransaction.amount,
      updatedTransaction.date, updatedTransaction.category, updatedTransaction.note);
    return true;
  }

  // Remove the transaction with the given id
  remove(id) {
    const index = this.transactions.findIndex((t) => t.id === String(id));
    if (index === -1) {
      return false;
    }

    this.transactions.splice(index, 1);
    return true;
  }

  // Return all transactions, newest date first (FR-5)
  getAll() {
    return this.transactions.slice().sort((a, b) => {
      if (a.date !== b.date) {
        return a.date < b.date ? 1 : -1;
      }
      // Same date: the one added last shows first
      return Number(b.id) - Number(a.id);
    });
  }

  // Return the total of all income transactions
  getTotalIncome() {
    let cents = 0;
    this.transactions.forEach((t) => {
      if (t.type === "Income") {
        cents += toCents(t.amount);
      }
    });
    return cents / 100;
  }

  // Return the total of all expense transactions
  getTotalSpending() {
    let cents = 0;
    this.transactions.forEach((t) => {
      if (t.type === "Expense") {
        cents += toCents(t.amount);
      }
    });
    return cents / 100;
  }

  // Return total income minus total spending
  getBalance() {
    return (toCents(this.getTotalIncome()) - toCents(this.getTotalSpending())) / 100;
  }

  // Return an object with the total spent in each category, largest total first (TC-15)
  getCategoryTotals() {
    const cents = {};
    EXPENSE_CATEGORIES.forEach((category) => {
      cents[category] = 0;
    });

    this.transactions.forEach((t) => {
      if (t.type === "Expense") {
        const category = EXPENSE_CATEGORIES.includes(t.category) ? t.category : "Other";
        cents[category] += toCents(t.amount);
      }
    });

    // Sort largest first; categories with the same total keep the order of EXPENSE_CATEGORIES
    const sorted = EXPENSE_CATEGORIES.slice().sort((a, b) => cents[b] - cents[a]);
    const totals = {};
    sorted.forEach((category) => {
      totals[category] = cents[category] / 100;
    });
    return totals;
  }
}


// ==============================
// Savings Goal
// Owner: Tai
// ==============================

class SavingsGoal {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }

  // Return how much of the goal has been reached, as a percent of the balance
  
  getProgress(balance) {
    if (this.amount <= 0) {
      return 0;
    }

    const progress = (balance / this.amount) * 100;

    return Math.max(0, Math.min(100, progress));
  }

}


// ==============================
// Storage
// Owner: Ethan
// ==============================

class StorageManager {
  constructor() {
    this.transactionsKey = "nestegg_transactions";
    this.goalKey = "nestegg_goal";
  }

  // Save the list of transactions to localStorage
  saveTransactions(transactions) {
    localStorage.setItem(this.transactionsKey, JSON.stringify(transactions));
  }

  // Load the list of transactions from localStorage
  loadTransactions() {
    const data = localStorage.getItem(this.transactionsKey);
    if (data == null) {
      return [];
    }
    return JSON.parse(data);
  }

  // Save the savings goal to localStorage
  saveGoal(goal) {
    localStorage.setItem(this.goalKey, JSON.stringify(goal));
  }

  // Load the savings goal from localStorage
  loadGoal() {
    const data = localStorage.getItem(this.goalKey);
    if (data == null) {
      return null;
    }
    return JSON.parse(data);
  }
}


// ==============================
// User Interface
// Owner: Gabriel
// ==============================

class UIController {
  constructor(transactionManager, storageManager) {
    this.transactionManager = transactionManager;
    this.storageManager = storageManager;
    this.goal = null;
  }

  // Load saved data, set up event listeners, and draw the page
  init() {}

  // Read the form and add a new transaction
  handleAdd() {}

  // Edit an existing transaction
  handleEdit(id) {}

  // Delete a transaction
  handleDelete(id) {}

  // Read the goal form and save the savings goal
  handleSaveGoal() {}

  // Check that the form inputs are filled in correctly
  validateInputs() {}

  // Show an error message to the user
  showError(message) {}

  // Redraw the summary, list, goal, and category totals
  render() {}
}


// ==============================
// Start the app
// ==============================

const app = new UIController(new TransactionManager(), new StorageManager());
app.init();
