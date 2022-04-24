import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isUnMounted, setIsUnMounted] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    try {
      setIsPending(true);
      const res = await projectAuth.signInWithEmailAndPassword(email, password);
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isUnMounted) {
        setError(false);
      }
    } catch (error) {
      if (!isUnMounted) {
        setError(error.message);
      }
    } finally {
      if (!isUnMounted) {
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      setIsUnMounted(true);
    };
  }, []);

  return { login, error, isPending };
};
