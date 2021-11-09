import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "../shared/services/auth.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    //     throw new Error("Method not implemented.");
    // }

    constructor(private authServic: AuthService, private router: Router) { }
    canActivate(rout: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        return this.authServic.isLoggedIn

    }
}