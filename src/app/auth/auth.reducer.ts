import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActions, AuthActionTypes } from './auth.actions';

// INITIAL STATE OF THE APPLICATION
export interface AuthState {
  loggedIn: boolean,
  user: User
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

// Function to be executed by the reducer before injecting to the appState
export function authReducer(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginAction:
        return {
          loggedIn: true,
          user: action.payload.user
        }
    default:
      return state;
  }
}
