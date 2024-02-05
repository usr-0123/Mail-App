import React from "react";

export const initialState = {
  isNavigationOpen: false,
};

const useReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAVIGATION_OPEN":
      return { ...state, isNavigationOpen: action.payload };

    default:
      return state;
  }
};

export default useReducer;
