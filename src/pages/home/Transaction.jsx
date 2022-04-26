import cl from "./Home.module.css";
export const Transaction = ({ name, amount }) => {
  return (
    <div className={cl.transaction}>
      <div>{name}</div>
      <div>{amount} $</div>
    </div>
  );
};
