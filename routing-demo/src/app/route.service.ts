import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteService implements CanActivate{

  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
  
    return false

  }

   
}
