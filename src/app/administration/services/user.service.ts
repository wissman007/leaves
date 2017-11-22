import {UserModel} from "../models/user.model";
import {Subject} from "rxjs/Subject";
export class UserService {


  usersChanged = new Subject<UserModel[]>();
  users: UserModel[] = [
    new UserModel('wissem.abdeljaouad@adventium.fr','Wissem','Jawad','25-02-1988',16,'Employe','test'),
    new UserModel('mmo@adventium.fr','Mickael','Mouton','25-02-1988',28,'Manager','test'),
    new UserModel('bseck@adventium.fr','Balla','Seck','10-03-2000',57,'Employe','test'),
    new UserModel('dejelloul@adventium.fr','Djelloul','Madani','25-02-1988',66,'Manager','test')

  ];

  getUsers(){
    return this.users.slice();
  }

  getUser(index: number){
    return this.users[index];
  }

  addUser(user: UserModel){
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }
}
