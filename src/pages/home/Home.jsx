import React from "react";
import cl from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <div className={cl.gay}>Home</div>
      <div>key is {process.env.REACT_APP_FIRESTORE_API_KEY}</div>
    </>
  );
};
