// ==============================
// Transactions
// Owner: Elias
// ==============================

class Transaction {
  constructor(id, type, amount, date, category, note) {
    this.id = id;
    this.type = type;
    this.amount = amount;
    this.date = date;
    this.category = category;
    this.note = note;
  }
}

class TransactionManager {
  constructor() {
    this.transactions = [];
  }

  // Add a new transaction to the list
  add(transaction) {}

  // Replace an existing transaction that has the same id
  update(id, updatedTransaction) {}

  // Remove the transaction with the given id
  remove(id) {}

  // Return all transactions
  getAll() {}

  // Return the total of all income transactions
  getTotalIncome() {}

  // Return the total of all expense transactions
  getTotalSpending() {}

  // Return total income minus total spending
  getBalance() {}

  // Return an object with the total spent in each category
  getCategoryTotals() {}
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

  // Return the balance as a percent of the goal amount (from 0 up to 100)
  getProgress(balance) {}
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
  saveTransactions(transactions) {}

  // Load the list of transactions from localStorage
  loadTransactions() {}

  // Save the savings goal to localStorage
  saveGoal(goal) {}

  // Load the savings goal from localStorage
  loadGoal() {}
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

  // Show an error message under the field that has the problem
  showError(field, message) {}

  // Redraw the summary, list, goal, and category totals
  render() {}
}


// ==============================
// Start the app
// ==============================

const app = new UIController(new TransactionManager(), new StorageManager());
app.init();
