import {UserModel} from "../models/user.model";
import {Subject} from "rxjs/Subject";
import {Http, Response, Headers} from '@angular/http'
import {Injectable} from "@angular/core";
@Injectable()
export class UserService {


  constructor(private http: Http){};

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
    const headers = new Headers(
          {
            'Content-Type': 'application/json',
            'Authorization': 'Basic dXNlcjo1Yjg2MDExMC01YjI1LTQwYmYtODI4OS1jMTE5OTlhYWZlNmE='


          }

      );
    return this.http.get("http://localhost:8080/users", headers )
        .map(
          (response: Response) => {
            const data = response.json();
            console.log(data);
            for (const user of data) {
               let userTmp = new UserModel(
                user.email, user.firstName, user.lastName, user.birthDate,user.id,'',user.password
              )
               console.log(userTmp);
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

  addUser(user: UserModel){
    const headers = new Headers(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Basic dXNlcjo1Yjg2MDExMC01YjI1LTQwYmYtODI4OS1jMTE5OTlhYWZlNmE='


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
