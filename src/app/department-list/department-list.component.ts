import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

   public selectedId : any;
   departmentList = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"React"},
    {"id":3, "name":"Bootstrap"},
    {"id":4, "name":"Node"},
    {"id":5, "name":"Java"},
  ];
  constructor(private router : Router, private rout : ActivatedRoute) { }

  ngOnInit(): void {
    this.rout.paramMap.subscribe((params : ParamMap) => {
      let id = params.get('id');
      this.selectedId = id;
  })
  }

  onSelect(department: { id: any; }){
   // this.router.navigate(["/departments", department.id])
   this.router.navigate([department.id], {relativeTo : this.rout})
  }

  isSelected(department: { id: any; }){
    //console.log(department.id +":"+this.selectedId+":"+department.id == this.selectedId)
    return department.id == this.selectedId ;
  }
}
