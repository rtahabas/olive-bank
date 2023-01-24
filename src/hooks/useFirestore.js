import { projectFireStore } from "../firebase/config";
import { useEffect, useReducer, useState } from "react";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const fireStoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, error: false, success: false };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        error: null,
        success: true,
      };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        error: action.payload,
        success: false,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(fireStoreReducer, initialState);
  const [isCancalled, setIsCancalled] = useState(false);

  // collection ref
  const ref = projectFireStore.collection(collection);

  // only dispatch is not cancalled
  const dispatchIfNotCancalled = (action) => {
    if (!isCancalled) {
      dispatch(action);
    }
  };

  // add a document
  const addDocument = (doc) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const addedDocument = ref.add(doc);
      dispatchIfNotCancalled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancalled({ type: "ERROR", payload: err.message });
    }
  };

  //delete a document
  const deleteDocument = (id) => {};

  useEffect(() => {
    return () => setIsCancalled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
