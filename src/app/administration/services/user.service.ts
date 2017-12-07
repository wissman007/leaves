import {UserModel} from "../models/user.model";
import {Subject} from "rxjs/Subject";
import {Http, Response, Headers} from '@angular/http'
import {Injectable} from "@angular/core";
import {AuthService} from "../../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
@Injectable()
export class UserService {


  constructor(private http: Http, private authService: AuthService, private route: ActivatedRoute, private router: Router){};

  usersChanged = new Subject<UserModel[]>();
  users: UserModel[] = [];

  /*= [
    new UserModel('wissem.abdeljaouad@adventium.fr','Wissem','Jawad','25-02-1988',16,'Employe','test'),
    new UserModel('mmo@adventium.fr','Mickael','Mouton','25-02-1988',28,'Manager','test'),
    new UserModel('bseck@adventium.fr','Balla','Seck','10-03-2000',57,'Employe','test'),
    new UserModel('dejelloul@adventium.fr','Djelloul','Madani','25-02-1988',66,'Manager','test')

  ];
  */
  getUsers(){
    this.users = [];


    const headers = new Headers();
    headers.append('Authorization', 'Bearer '+ this.authService.token );
    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    return this.http.get("http://localhost:8080/users", {headers: headers} )
        .map(
          (response: Response) => {
            const data = response.json();
            console.log(data);
            for (const user of data) {
               let userTmp = new UserModel(
                user.email, user.firstName, user.lastName, user.birthDate,user.id,'',user.password
              )
               this.users.push(userTmp);
            }
            return this.users.slice();
          }
          );


    //return this.users.slice();
  }

  getUser(index: number){
    return this.users[index];
  }


  register(email: string, password: string){

    let user= new UserModel(email,'','','',4,'',password);
    this.addUser(user)
    this.router.navigate(['/admin/users'], {relativeTo:this.route});
  }

  addUser(user: UserModel){
    const headers = new Headers(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.authService.token

      }

    );

    this.http.post('http://localhost:8080/users',user, headers)
      .subscribe(
        (response: Response) => console.log(response),
        (error: Error) => console.log(error)
      );

    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }



}
