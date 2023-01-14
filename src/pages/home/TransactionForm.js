import { useState } from "react";

const TransactionForm = () => {

  const [transactionForm, setTransactionFrom] = useState({
    name: "",
    amount: 0,
  });

  const handleChange = (e) => {

      const { name, value } = e.target;
      setTransactionFrom({ ...transactionForm, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();    
};


  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            type="text"
            required
            name="name"
            onChange={handleChange}
            value={transactionForm.name}
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type="number"
            name="amount"
            required
            onChange={handleChange}
            value={transactionForm.amount}
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
