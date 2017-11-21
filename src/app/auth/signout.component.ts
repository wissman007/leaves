
import {Component, OnInit} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
@Component({
    selector: 'app-signout',
    template: `<p>Signout Component</p>`

})
export class SignOutComponent implements OnInit{

    constructor(private authService: AuthService, private router: Router){

    }

    ngOnInit(){
        this.authService.isAuthentificated = false;
        this.router.navigate(['/']);
    }

}