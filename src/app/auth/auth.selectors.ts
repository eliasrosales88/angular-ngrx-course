import { createSelector } from "@ngrx/store";

export const selectAuthState = state => state.auth;

export const isLoggedIn = createSelector(
    selectAuthState,
    //proyector function
    auth => auth.loggedIn
);
export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);

// this is to not fetch the data several times

