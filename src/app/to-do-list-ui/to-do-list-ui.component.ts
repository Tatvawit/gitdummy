import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-to-do-list-ui',
  templateUrl: './to-do-list-ui.component.html',
  styleUrls: ['./to-do-list-ui.component.scss']
})
export class ToDoListUIComponent implements OnInit {

  temp:any;
  tableShow: any;
  show:boolean = true;
  TasktableArray: any[] = [];
  Array:any;
  SortedArray : any;
  SortedArrayTable : any;
  condition = true;
  searchText = '';
  SearchTable :any;
  SearchArray:any[] = [];
  newArray: any;
  key:any;
  tempvar:any;
  SrcArray:any;
  len:any;
  nextdummy:any=0
  rowShow:boolean=true;

  constructor(private api:ApiService,private acitvatedRoute:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.ToDoListTable();
  }

  ToDoListTable(){
    this.api.getAllData().subscribe((response)=>{
         this.tableShow=response;   //dataArray
         this.SortedArrayTable =  this.tableShow  //newArray
    })

  }

  deleteData(id:number)
  {
    this.api.deleteData(id).subscribe((response)=>{
      if(response)
      {
        alert('Record Deleted Successfully !');
        this.ToDoListTable();
      }
    })
  }

  navigateToDoListForm(){
    this.route.navigate(['ToDoListForm'])
  }

  showTaskData(id:number){
    this.show = !this.show
    this.api.editData(id).subscribe((response)=>{
      if(this.TasktableArray[0] == null || this.TasktableArray[0] == undefined){
        this.TasktableArray.push(response);
      }else{
        this.TasktableArray.pop();
        this.TasktableArray.push(response)
      }
    })

  }

  showTable(){
    this.show = !this.show
  }

  AscendingCompareName(a:any,b:any) {
    const name1 = a.title.toUpperCase();
    const name2 = b.title.toUpperCase();
    let comparison = 0;
    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
  }

  DescendingCompareName(a:any,b:any) {
    const name1 = a.title.toUpperCase();
    const name2 = b.title.toUpperCase();
    let comparison = 0;
    if (name1 > name2) {
        comparison = -1;
    } else if (name1 < name2) {
        comparison = 1;
    }
    return comparison;
  }

 SortArray(){
  this.SortedArrayTable = [];
  this.condition? this.SortedArray = this.tableShow.sort(this.AscendingCompareName): this.SortedArray = this.tableShow.sort(this.DescendingCompareName);
  for(let i=0;i<this.SortedArray.length;i++){
     this.temp = this.SortedArray[i];
    for(let j=0;j<this.SortedArray.length;j++){
      if(this.temp.title == this.tableShow[j].title){
        this.SortedArrayTable.push(this.tableShow[j])
      }
    }
  }
 }

 ToggleFunction(){
  this.condition = !this.condition;
 }

//  Search(srchval:any){
//   this.SortedArrayTable = [];
//     for(let i=0;i<this.tableShow.length;i++){
//       this.temp = this.tableShow[i];
//       if(this.temp.title.toLowerCase().includes(srchval)){
//         this.SortedArrayTable.push(this.tableShow[i]);
//         }
//      }
// }

  Search(srchval:any){
      this.SortedArrayTable = [];
      this.SrcArray = Object.keys(this.tableShow[0]);
      for (let i = 0; i < this.SrcArray.length; i++){
        this.key = this.SrcArray[i];
        for (let j = 0; j < this.tableShow.length; j++) {
          this.temp = this.tableShow[j][this.key].toString().toLowerCase();
          if (this.temp.includes(srchval.toLowerCase())){
            if (!this.SortedArrayTable.includes(this.tableShow[j]))
            this.SortedArrayTable.push(this.tableShow[j]);
          }
        }
      }
    }

  loop(inti: any, c: any) {
      for (let i = inti; i < c; i++) {
        this.SortedArrayTable.push(this.tableShow[i]);
        console.log(this.newArray)
    }
  }

  //Pageanation
  rows(b: any) {
    this.rowShow = !this.rowShow;
    this.temp = 0;
    this.key = b;
    this.SortedArrayTable = [];
    this.len = this.tableShow.length;
    if (b == 5) {
      if (b > this.len) alert('length of table is less than 5');
      else this.loop(this.temp, 5);
      this.tempvar = 5;
    }
  }

  //for next and previous
  page(pg: any) {
    //next page
    this.SortedArrayTable = [];
    if (pg == 'next') {
      if (this.key == 5) {
        this.temp = this.tempvar;
        this.tempvar += 5;
      }
    }
    //previous page
    else if (pg == 'pre') {
      if (this.key == 5) {
        this.tempvar = this.temp;
        this.temp -= 5;
      }
    }
    if (this.tempvar < this.len) this.loop(this.temp, this.tempvar);
    else{
      console.log(this.temp)
      this.nextdummy = this.temp;
      this.loop(this.temp, this.len);
    }
  }
}
