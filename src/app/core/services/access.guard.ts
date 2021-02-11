import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SesionService } from './sesion.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccessGuard implements CanActivate {

    constructor(public session: SesionService, public router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.session.logged) {
            return true;
        }

        this.router.navigate(['/']);

        return false;
    }
}
