import { createStore } from 'redux';
import { authReducer } from './reducers/auth';

export const store = createStore(authReducer);
