import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { useFirestore } from "../../hooks/useFirestore";
import cl from "./Home.module.css";
import { Transaction } from "./Transaction";

import TransactionForm from "./TransactionForm";

export const Home = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );
  const { deleteDocument } = useFirestore("transactions");

  return (
    <div className={cl.container}>
      <div className={cl.content}>
        {documents &&
          documents.map((doc) => (
            <Transaction deleteDoc={deleteDocument} key={doc.id} doc={doc} />
          ))}

        {error && <p>{error}</p>}
      </div>
      <div className={cl.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
};
