import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
import { AuthActionTypes } from '../auth/auth.actions';

type AuthState = {
  loggedIn: boolean,
  user: User
}

// Function to be executed by the reducer before injecting to the appState
function authReducer( state: AuthState, action): AuthState {
  switch(action.type){
    
    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      }
    
    default:
      return state
  }
}


//Data structure of the AppState
export interface AppState {

  // auth is the first property inyected in the appState
  auth: AuthState,
  // courses: CoursesState,
  // lessons: LessonsState
}

export const reducers: ActionReducerMap<AppState> = {
 
  auth: authReducer

};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
