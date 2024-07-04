import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css'],
  standalone: true,
  imports: [RouterOutlet]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: any;
  constructor(private rout : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    //let id = this.rout.snapshot.paramMap.get("id");
    //this.departmentId = id;
    this.rout.paramMap.subscribe((params : ParamMap) => {
        let id = params.get('id');
        this.departmentId = id;
    })
  }

  goPrevious(){
    let previousId = this.departmentId-1;
    //this.router.navigate(["/departments", previousId])
    this.router.navigate(['../', previousId], {relativeTo : this.rout})
    //this.departmentId = previousId;
  }

  goNext(){
    let nextId = parseInt(this.departmentId) + 1;
    //this.router.navigate(["/departments", nextId])
    this.router.navigate(['../', nextId], {relativeTo : this.rout})
    //this.departmentId = nextId;
  }

  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(["/departments", {"id" : selectedId}])
    this.router.navigate(['../', {'id':selectedId}], {relativeTo : this.rout})
   // this.router.navigate(['../'], {relativeTo : this.rout})
  }

  showOverview(){
    this.router.navigate(["overview"], {relativeTo : this.rout})
  }

  showContact(){
    this.router.navigate(["contact"], {relativeTo : this.rout})
  }
}
