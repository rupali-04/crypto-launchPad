import { LOGIN, LOGOUT } from '../actions/auth';
import React, {createContext, useContext, useReducer} from "react";

const initialState = {
  isLoggedIn: false,
  wallet: null
};

export function authReducer(state = initialState, action) {
    console.log(action);
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true,wallet:{address: action.item.address} };
    case LOGOUT:
      return { ...state, isLoggedIn: false,wallet:null };
    default:
      return state;
  }
}



// //Prepares the data layer

// export const StateContext = createContext();

// //Wrap our App and provide the data layer

// export const StateProvider = ({ authReducer, initialState, children}) => (
//     <StateContext.Provider value ={useReducer(authReducer, initialState)}>
//         {children}
//     </StateContext.Provider>
// );

// //Pull information from data layer

// export const useStateValue = () => useContext(StateContext);