import {Router, ActivatedRoute} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserService} from "../administration/services/user.service";
import {UserModel} from "../administration/models/user.model";

@Injectable()
export class AuthService {

    isAuthentificated = false;
    constructor(

        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService){

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
        let user= new UserModel(email,'','','',4,'',password);
        this.userService.addUser(user)
        this.router.navigate(['/admin/users'], {relativeTo:this.route});
    }

    login(email: string, password: string){

    }

}
