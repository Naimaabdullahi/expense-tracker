import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isNaN(formData.amount) || parseFloat(formData.amount) <= 0) {
      setError("Amount must be a positive number.");
      return;
    }
    const newExpense = {
      id: crypto.randomUUID(),
      ...formData,
      amount: parseFloat(formData.amount),
    };
    onAddExpense(newExpense);
    setFormData({ description: "", amount: "", category: "" });
    setError("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;
