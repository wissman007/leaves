import {Router, ActivatedRoute} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

    isAuthentificated = false;
    constructor( private router: Router, private route: ActivatedRoute){

    }

    authentificate(email: string, password: string){

        if((email==='test@test.com')&&(password === 'test')) {
            this.isAuthentificated = true;
            this.router.navigate(['/']);
        }
        else {
            this.router.navigate(['auth/signin'],{relativeTo:this.route});
        }

   }

    register(email: string, password: string){
       this.isAuthentificated = true;
       this.router.navigate(['/']);
    }

    login(email: string, password: string){

    }

}