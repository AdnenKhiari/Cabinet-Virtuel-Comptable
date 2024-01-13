import {Injectable} from '@angular/core'
import { ActivatedRouteSnapshot,CanActivate,Router,RouterStateSnapshot,UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthorizationService } from '../autorisation/authorization.service';

@Injectable({
  providedIn: 'root'
  })
export class autorisationGuard implements CanActivate{
  constructor(private authorizationService:AuthorizationService,private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   const requiredRole=route.data['requiredRole'] as string;
   if(this.authorizationService.hasRole(requiredRole)){
    return true;
   }
   else{
   this.router.navigate(['/Login'])
   return false;
   }
  }

}

