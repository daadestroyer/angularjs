import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { TodosComponent } from './MyComponents/todos/todos.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'addtodo', component: TodosComponent },
  { path: 'about', component: AboutComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
