import {Router, ActivatedRoute} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserService} from "../administration/services/user.service";
import {UserModel} from "../administration/models/user.model";
import {Http} from "@angular/http";
import {Subscription} from "rxjs";

@Injectable()
export class AuthService {

    isAuthentificated = false;
    authentificatedUser: UserModel;
    constructor(

        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService

    ){}
    usersAuthentified: UserModel[]=[];
    authentificate(email: string, password: string){
       this.userService.getUsers()
          .subscribe(
            (users: UserModel[]) => {
              console.log(users);
              this.usersAuthentified = users;
            }
          );


        for(let user of this.usersAuthentified) {
          if((email===user.email)&&(password === user.password)) {
            this.isAuthentificated = true;
            this.authentificatedUser = user;
           }
        }



        if(this.isAuthentificated) {
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
