
import {LeaveModel} from "../model/leave.model";
import {Subject} from "rxjs";
import {Http, Response, Headers, ResponseContentType} from "@angular/http";
import {Injectable} from "@angular/core";
import {AuthService} from "../../auth/auth.service";
@Injectable()
export class LeaveService {

   leavesChanged = new Subject<LeaveModel[]>()

   leaves: LeaveModel [];

/*= [
        new LeaveModel('12-12-2017','12-12-2018','CM', 'Holidays In France','CC'),
        new LeaveModel('21-02-2018','28-02-2018','CP','Holidays at the ski', 'CC' )

    ];

*/
    constructor(private http: Http, private authService: AuthService){}

    getLeaves(){

      this.leaves=[];

      const headers = new Headers(
        {
          'Content-Type': 'application/pdf',
          'Authorization': 'Bearer ' + this.authService.token


        }

      );
      return this.http.get('http://localhost:8080/leaves/1/pdf',  {headers:headers, responseType: ResponseContentType.Blob }).map(
        (res) => {
          return new Blob([res.blob()], { type: 'application/pdf' })
        });


         /* .map(
            (response: Response) => {
              console.log(response);
              const data = response.json();

              for ( let leave of data){
                this.leaves.push(new LeaveModel(
                  leave.startDate,
                  leave.endDate,
                  leave.typeLeave,
                  leave.description,
                  leave.type
                ));
              }
              console.log(this.leaves);
              return this.leaves.slice();
            }

          );*/

    }

    getLeave(index: number){
        return this.leaves[index];
    }

    deleteLeave(index: number){
        this.leaves.splice(index, 1);
        this.leavesChanged.next(this.leaves.slice());
    }

    saveLeave(leave: LeaveModel){
        this.leaves.push(leave);
        this.leavesChanged.next(this.leaves.slice());
    }
}
