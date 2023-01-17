import React, { useState } from "react";
import TransactionsList from "./TransactionList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("")
  return (
    <div>
      <AddTransactionForm transactions={transactions} setTransactions={setTransactions} />
      <br />
      <br />
      <Search search={search} setSearch={setSearch} />
      <br />
      <br />
      <TransactionsList transactions={transactions} setTransactions={setTransactions} search={search} setSearch={setSearch} />
      </div>
  );
}

export default AccountContainer;