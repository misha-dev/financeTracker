import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isUnMounted, setIsUnMounted] = useState(false);
  const { dispatch } = useAuthContext();

  const logOut = async () => {
    try {
      setIsPending(true);
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });

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
  return { logOut, error, isPending };
};
