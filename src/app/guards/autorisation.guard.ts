import {Injectable} from '@angular/core'
import { ActivatedRouteSnapshot,CanActivate,Router,RouterStateSnapshot,UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthorizationService } from '../autorisation/authorization.service';
import { AuthService } from '../authentification/auth.service';

@Injectable({
  providedIn: 'root'
  })
export class autorisationGuard implements CanActivate{
  constructor(private authorizationService:AuthorizationService,private router:Router,private authentificationService:AuthService){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (!this.authentificationService.isUserLoggedIn()) {
    
      this.router.navigate(['/Login']);
      return false;
    }

   
   
    const requiredRole=route.data['requiredRole'] as string[];

   if(requiredRole.some((role: string) => this.authorizationService.hasRole(role))){
    return true;
   }
   else{
   this.router.navigate(['/Login'])
   return false;
   }
  }

}

