import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Credentials} from "./signin/signin.component";

@Injectable()
export class AuthService {

    isAuthentificated = false;
    token;

    constructor(
        private http: Http
    ){

      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.token = currentUser && currentUser.token;
    }

   login(credentials: Credentials){

      const headers = new Headers();
      headers.append('Authorization', 'Basic bGVhdmUtY2xpZW50OmxlYXZlLXNlY3JldA==');
      headers.append('Content-Type', 'application/json');


      let creds = 'username=' + credentials.username + '&password=' + credentials.password;

       return this.http.post('http://localhost:8080/oauth/token?grant_type=password&'+creds, [], {headers:headers})
         .map(

            (response: Response) => {
                let token = response.json().access_token;
                if(token) {
                  this.token=token;
                  localStorage.setItem('currentUser', JSON.stringify({ username: credentials.username, token: token }));
                  this.isAuthentificated = true;
                  return true;
                }
                else {
                  this.isAuthentificated = false;
                  return false;
                }
             },
           (error) => console.log(error)
         );



   }



    logout(){
      // clear token remove user from local storage to log user out
      this.token = null;
      this.isAuthentificated = false;
      localStorage.removeItem('currentUser');

    }

}
