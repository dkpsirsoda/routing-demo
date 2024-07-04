import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employeeId:any;
  constructor(private rout : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
      this.rout.paramMap.subscribe((params : ParamMap) =>{
      let id = params.get('id');
      this.employeeId = id;
     })
  }

  goPrevious(){
    let previousId = this.employeeId-100;
    this.router.navigate(["/employees", previousId])
  }

  goNext(){
    let nextId = parseInt(this.employeeId) + 100;
    this.router.navigate(["/employees", nextId])
  }

  goToEmployee(){
    let selectedId = this.employeeId ? this.employeeId : null;
    this.router.navigate(["/employees", {"id" : selectedId, "name":"Dinesh"}])
  }
}
