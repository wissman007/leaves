import {UserModel} from "../models/user.model";
export class UserService {

  users: UserModel[] = [
    new UserModel('Wissem','Jawad','25-02-1988',16,'Employe'),
    new UserModel('Mickael','Mouton','25-02-1988',28,'Manager'),
    new UserModel('Balla','Seck','10-03-2000',57,'Employe'),
    new UserModel('Djelloul','Madani','25-02-1988',66,'Manager')

  ];

  getUser(index: number){
    return this.users[index];
  }
}
