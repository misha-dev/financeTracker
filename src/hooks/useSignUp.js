import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isUnMounted, setIsUnMounted] = useState(false);

  const { dispatch } = useAuthContext();

  const signUp = async (email, password, displayName) => {
    try {
      setIsPending(true);
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      if (!response) {
        throw new Error("Could not authenticate the user!");
      }

      // updating with displayName
      await response.user.updateProfile({ displayName });

      // dispatching action LOGIN
      dispatch({ type: "LOGIN", payload: response.user });

      if (!isUnMounted) {
        setError(null);
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
  return { signUp, error, isPending };
};
