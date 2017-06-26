import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild ,ActivatedRouteSnapshot,RouterStateSnapshot,Route} from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild{

 constructor(){}
 
 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
 	console.log(route);

	 if(localStorage.getItem('username') == 'user')
	    return true;
	 else
		return false;
	  
	}
 canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
 	console.log("route._urlSegment.pathsWithParams[0].path",route.routeConfig.data.roles.indexOf(localStorage.getItem('username')));
 //	  let path = route._urlSegment.pathsWithParams[0].path;
 	  let roles;
 	  if(route.routeConfig.component)
 	// if (route._routeConfig.path == path) {
  //       roles = route._routeConfig.data.roles
  //   } else {
  //       roles = route._routeConfig.children.find(_route => _route.path == path).data.roles;
  //   }

    if (roles) {
        return true;
    }

    return false;
 } 
}
