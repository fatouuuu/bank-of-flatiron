import React from "react";

function Transaction({ date, description, category, amount, id, transactions, setTransactions }) {
  function handleDelete() {
    fetch(` http://localhost:3000/transactions/${id}`, {
      method: "DELETE"
    })
    .then((res) => res.json())
    .then(() => {
      const availableTransactions = transactions.filter((transaction) => {
        return transaction.id !== id
      }) 
      setTransactions(availableTransactions)
    })
  }
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button onClick={handleDelete}>Delete</button></td>
    </tr>
  );
}

export default Transaction;