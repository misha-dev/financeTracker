import { useReducer, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { projectFirestore, timeStamp } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

export const useFirestore = (collection) => {
  const [isUnMounted, setIsUnMounted] = useState(false);
  const dispatchIfNotUnmounted = (action) => {
    if (!isUnMounted) {
      // @ts-ignore
      dispatch(action);
    }
  };

  const firestoreReducer = (state, action) => {
    switch (action.type) {
      case "IS_PENDING":
        return { document: null, error: null, success: null, isPending: true };
      case "ADD_DOCUMENT":
        return {
          document: action.payload,
          success: true,
          isPending: false,
          error: null,
        };
      case "ERROR":
        return {
          document: null,
          isPending: false,
          success: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  // collection ref
  const ref = projectFirestore.collection(collection);

  const addDocument = async (doc) => {
    // @ts-ignore
    dispatchIfNotUnmounted({ type: "IS_PENDING" });
    try {
      const createdAt = timeStamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt });
      dispatchIfNotUnmounted({
        type: "ADD_DOCUMENT",
        payload: addedDocument,
      });
      // @ts-ignore
    } catch (error) {
      // @ts-ignore
      dispatchIfNotUnmounted({ type: "ERROR", payload: error.message });
    }
  };

  const deleteDocument = (id) => {};

  useEffect(() => {
    return () => {
      setIsUnMounted(true);
    };
  }, []);

  return { response, addDocument, deleteDocument };
};
