import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core'

export const guardianOfAegisGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  let isOk = Math.random() < 0.5;

  if(isOk){
    return true
  }

  router.navigate(['get-out']);
  return false;
};
