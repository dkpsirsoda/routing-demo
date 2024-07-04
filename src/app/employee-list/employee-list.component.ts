import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public selectedId : any;
  employeeList = [
    {"id":101, "name":"Dinesh"},
    {"id":201, "name":"Kailash"},
    {"id":301, "name":"Tanuj"},
    {"id":401, "name":"Nikunj"},
    {"id":501, "name":"Manisha"},
  ];
  constructor(private router : Router, private rout : ActivatedRoute) { }

  ngOnInit(): void {
    this.rout.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
    })
  }

  onSelect(employee: { id: any; }){
    this.router.navigate(["/employees", employee.id])
  }

  isSelected(employee: any){
    return this.selectedId == employee.id
  }
}
