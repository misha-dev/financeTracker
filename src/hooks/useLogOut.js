import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogOut = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logOut = async () => {
    try {
      setIsPending(true);
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });

      setIsPending(false);
      setError(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsPending(false);
    }

    return { logOut, error, isPending };
  };
};
