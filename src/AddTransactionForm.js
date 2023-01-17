import React, { useState } from "react";

function AddTransactionForm({ transactions, setTransactions}) {
  //const [transactionData, setTransactionData] = useState([]);//
  const [formData, setFormData] = useState({
  date: "",
  description: "",
  category: "",
  amount: 0,
})

  function handleChange(event) {
    let name = event.target.name
    let value = event.target.value
    setFormData ({  
      ...formData, [name]: value
    }); 
  }

  function handleSubmit(event){
    event.preventDefault()
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then((r) => r.json())
      .then((data) => {
      const newTransactionData = [...transactions, data] 
      setTransactions(newTransactionData)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div>
          <input 
          type="date" 
          name="date" 
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="description" 
          placeholder="Description" 
          onChange={handleChange}
          />
          <input 
          type="text" 
          name="category" 
          placeholder="Category" 
          onChange={handleChange}
          />
          <input 
          type="number" 
          name="amount" 
          placeholder="Amount" 
          step="0.01" 
          onChange={handleChange}
          />
        </div>
        <br />
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;