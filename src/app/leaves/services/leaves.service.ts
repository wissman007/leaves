
import {LeaveModel} from "../model/leave.model";
import {Subject} from "rxjs";
import {Http, Response} from "@angular/http";
export class LeaveService {

   leavesChanged = new Subject<LeaveModel[]>()

   leaves: LeaveModel [];

/*= [
        new LeaveModel('12-12-2017','12-12-2018','CM', 'Holidays In France','CC'),
        new LeaveModel('21-02-2018','28-02-2018','CP','Holidays at the ski', 'CC' )

    ];

*/
    constructor(private http: Http){}

    getLeaves(){
      this.leaves=[];
      return this.http.get('http://localhost:8080/leaves')
          .map(
            (response: Response) => {
              const data = response.json();
              for ( let leave of data){
                this.leaves.push(new LeaveModel(
                  data.startDate,
                  data.endDate,
                  data.typeLeave,
                  data.description,
                  data.type
                ));
              }
              return this.leaves;
            }

          );

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
