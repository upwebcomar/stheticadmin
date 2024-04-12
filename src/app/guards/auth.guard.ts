import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../modules/authentication/services/auth.service';

export const AuthGuard: CanActivateFn = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot) => {
  const authservice = inject(AuthService)
  let currentUser = authservice.UsuarioAutenticado;
      if(currentUser && currentUser.token){
        return true;
      }
      //rutas.navigate(['/login']);
      return false;
  }
 
