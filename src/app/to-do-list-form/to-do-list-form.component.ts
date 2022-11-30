import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoList } from '../model/Todolist';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-to-do-list-form',
  templateUrl: './to-do-list-form.component.html',
  styleUrls: ['./to-do-list-form.component.scss']
})
export class ToDoListFormComponent implements OnInit {
  ToDoListForm!: FormGroup;
  ToDoListData : ToDoList = new ToDoList;
  constructor(private fb:FormBuilder,private api:ApiService,private route:Router,private activatedRoute:ActivatedRoute) {
    this.ToDoListForm = fb.group({
      title : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
      task: ['',[Validators.required]],
      date : ['',[Validators.required]],
      time: ['',[Validators.required]],
      priority: [''],
    });
   }

  ngOnInit(): void {
    this.api.editData(this.activatedRoute.snapshot.params['id']).subscribe((response:any)=>{
      this.ToDoListForm.setValue(response)
 })
  }
  AddData({value}:{value:ToDoList}){
    if(this.activatedRoute.snapshot.params['id']){
      this.api.editRecord(this.activatedRoute.snapshot.params['id'],value).subscribe((res)=>{
        if(res){
          alert('Record Updated Successfully  !');
          this.route.navigate(['ToDoListUI']);
        }
      })
    }
    else{
      this.api.postData(value).subscribe((response)=>{
         if(response){
           alert('Record Successfully Added !');
           this.route.navigate(['ToDoListUI']);
         }
      })
    }
  }
}
