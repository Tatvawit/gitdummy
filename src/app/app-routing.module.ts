import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListFormComponent } from './to-do-list-form/to-do-list-form.component';
import { ToDoListUIComponent } from './to-do-list-ui/to-do-list-ui.component';

const routes: Routes = [{
  path:'',redirectTo:'ToDoListUI',pathMatch:'full'
},
{
  path:'ToDoListUI',component:ToDoListUIComponent
},
{
  path:'ToDoListForm/:id',component:ToDoListFormComponent
},
{
  path:'ToDoListForm',component:ToDoListFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
