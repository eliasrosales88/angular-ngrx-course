import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Login, AuthActionTypes, Logout } from './auth.actions';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { defer, of } from 'rxjs';



@Injectable()
export class AuthEffects {
  
  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    // identificamos el login action con ofType
    ofType<Login>(AuthActionTypes.LoginAction),
    tap(action => localStorage.setItem('user', JSON.stringify(action.payload.user)))
  );
  
  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.LogoutAction),
    tap(() =>  {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login');
    
    })
  );

  @Effect()
  init$ = defer(() => { // defer will create an observable
    const userData = localStorage.getItem("user");
    if (userData) {
      return of(new Login(JSON.parse(userData)))
    }
    else {
      return of(new Logout());
    }

  });
  constructor(private actions$: Actions, private router: Router) {}

}
