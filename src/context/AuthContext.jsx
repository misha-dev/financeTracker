import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        return { ...state, user: action.payload };
      case "LOGOUT":
        return { ...state, user: null };
      case "LOGGED":
        return {...state, user: action.payload, logged: true}
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    logged: false,
  });

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      // @ts-ignore
      dispatch({ type: "LOGGED", payload: user });
      // only for the first check, so we end checking if user changes its log value by calling the function
      unsub()
    });
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
