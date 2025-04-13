import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Search state

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  function handleDeleteExpense(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  // Filtering expenses based on searchTerm
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} /> {/* SearchBar updates searchTerm */}
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable
        expenses={filteredExpenses} // Only passing filtered expenses to table
        onDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
}

export default App;
