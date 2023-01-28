import React, { useEffect, useState } from "react";
import { useFirestore } from "hooks/useFirestore"

const TransactionForm = ({ uid }) => {
  const { addDocument, response } = useFirestore("transactions");
  const [transactionForm, setTransactionFrom] = useState({
    name: "",
    amount: "",
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setTransactionFrom({ ...transactionForm, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ ...transactionForm, uid });
  };

  useEffect(() => {
    if (response.success) {
      setTransactionFrom({ name: "", amount: "" });
    }
  }, [response.success]);


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
