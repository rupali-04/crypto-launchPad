import { LOGIN, LOGOUT,Role } from '../actions/auth';
import React, {createContext, useContext, useReducer} from "react";

const initialState = {
  isLoggedIn: false,
  wallet: null,
  role: null
};

export function authReducer(state = initialState, action) {
    
  switch (action.type) {
    case LOGIN:
      console.log(action);
      return { ...state, isLoggedIn: true,wallet:{address: action.item.addres,chainId: action.item.chainId, signer: action.item.signer} };
    case LOGOUT:
      return { ...state, isLoggedIn: false,wallet:null,role: null };
    case Role:
      console.log(action);
      return {...state,role: action.item.appRole};
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