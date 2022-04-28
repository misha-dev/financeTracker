import { ImCross } from "react-icons/im";
import cl from "./Home.module.css";
export const Transaction = ({ doc, deleteDoc }) => {
  return (
    <div className={cl.transaction}>
      <div>{doc.name}</div>
      <div>{doc.amount} $</div>
      <ImCross
        className={cl.cross}
        onClick={() => {
          deleteDoc(doc.id);
        }}
      />
    </div>
  );
};
