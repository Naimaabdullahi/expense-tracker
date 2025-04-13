import React, { useState } from "react";

function ExpenseTable({ expenses, onDeleteExpense }) {
  const [sortBy, setSortBy] = useState("description");

  function handleSort(column) {
    setSortBy(column);
  }

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  return (
    <div>
      <h2>Expense List</h2>
      <button onClick={() => handleSort("description")}>Sort by Description</button>
      <button onClick={() => handleSort("category")}>Sort by Category</button>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount ($)</th>
            <th>Category</th>
            <th>Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {sortedExpenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;
