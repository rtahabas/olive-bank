import styles from "./Home.module.css";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";
import { useAuthContext } from "hooks/useAuthContext";
import { useCollection } from "hooks/useCollection";
import React from "react";

const Home = () => {
  const { user } = useAuthContext();
  const { document, error } = useCollection("transactions");
  console.log(document)
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {document && <TransactionList transactions={document} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};

export default Home;
