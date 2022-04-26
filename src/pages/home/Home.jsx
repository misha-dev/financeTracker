import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import cl from "./Home.module.css";
import { Transaction } from "./Transaction";

import TransactionForm from "./TransactionForm";

export const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("transactions");
  return (
    <div className={cl.container}>
      <div className={cl.content}>
        {documents &&
          documents.map((doc) => (
            <Transaction key={doc.id} name={doc.name} amount={doc.amount} />
          ))}

        {error && <p>{error}</p>}
      </div>
      <div className={cl.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};
