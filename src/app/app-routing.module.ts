import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentCantactComponent } from './department-cantact/department-cantact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path : "",redirectTo : "/departments", pathMatch : "full"},
  {path : "departments",component: DepartmentListComponent},
  { path : "departments/:id",
    component: DepartmentDetailComponent,
    children: [
      {path:"overview", component : DepartmentOverviewComponent},
      {path:"contact", component : DepartmentCantactComponent}
    ]
  },
  {path : "employees",component: EmployeeListComponent},
  {path : "employees/:id",component: EmployeeDetailComponent},
  {path : "**", component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DepartmentListComponent,
                                   EmployeeListComponent,
                                   PageNotFoundComponent,
                                   DepartmentListComponent,
                                   EmployeeDetailComponent,
                                   DepartmentOverviewComponent,
                                   DepartmentCantactComponent]
