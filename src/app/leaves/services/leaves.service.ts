
import {LeaveModel} from "../model/leave.model";
import {Subject} from "rxjs";
export class LeaveService {

   leavesChanged = new Subject<LeaveModel[]>()

   leaves: LeaveModel [] = [
        new LeaveModel('12-12-2017','12-12-2018','CM', 'Holidays In France'),
        new LeaveModel('21-02-2018','28-02-2018','CP','Holidays at the ski' )

    ];

    getLeaves(){
        return this.leaves.slice();
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