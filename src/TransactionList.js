import React, { useEffect } from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions, setTransactions, search, setSearch }) {
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
  },[setTransactions])

  const filteredTransactions = transactions.filter((transaction) => transaction.description.toLowerCase().includes(search.toLowerCase()))

  const transactionList = filteredTransactions.map((transaction) => {
    return <Transaction 
    transactions={transactions} 
    setTransactions={setTransactions}
    key={transaction.id} 
    date={transaction.date} 
    description={transaction.description} 
    category={transaction.category} 
    amount={transaction.amount}
    id={transaction.id}
    />
})

  return (
    <table>
      <tbody>
        <tr>
          <th>
            <h3>Date</h3>
          </th>
          <th>
            <h3>Description</h3>
          </th>
          <th>
            <h3>Category</h3>
          </th>
          <th>
            <h3>Amount</h3>
          </th>
        </tr>
        {transactionList}
      </tbody>
    </table>
  );
}

export default TransactionsList;