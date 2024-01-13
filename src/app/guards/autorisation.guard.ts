import {Injectable} from '@angular/core'
import { ActivatedRouteSnapshot,CanActivate,Router,RouterStateSnapshot,UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthorizationService } from '../autorisation/authorization.service';
import { AuthenticationService } from '../service/authentication-service';

@Injectable({
  providedIn: 'root'
  })
export class autorisationGuard implements CanActivate{
  constructor(private router:Router,private authentificationService:AuthenticationService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('Guard checking authentication and roles...');

    if (this.authentificationService.isAuthenticated()) {
      console.log('Guard checking authentication and roles...');
      
      console.log(this.authentificationService.getUserRole())     
       
    }
    else{
      console.log('User is not authenticated.');
      this.router.navigate(['/Login']);
      return false;
    }

   
   
   const requiredRole=route.data?.['requiredRole'] as string[];
   console.log('Required Role:', requiredRole);
   if (!requiredRole || requiredRole.length === 0) {
    console.error('Required roles not specified in the route data.');
    return false;
  }

   if(requiredRole.some((role: string) => this.authentificationService.hasRole(role))){
    console.log('User has the required role.');

    return true;
   }
   else{
    console.log('User does not have the required role.');

   this.router.navigate(['/Login'])
   return false;
   }
  }

}

