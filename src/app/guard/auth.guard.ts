import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("token")) {
    return true;
  }
  alert("Token is required")
  return false;
};
