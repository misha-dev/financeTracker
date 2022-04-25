import cl from "./Home.module.css";

import TransactionForm from "./TransactionForm";

export const Home = () => {
  return (
    <div className={cl.container}>
      <div className={cl.content}>transaction list</div>
      <div className={cl.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
};
