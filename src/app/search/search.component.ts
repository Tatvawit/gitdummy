import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() childStringData : EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  Searchtext(srchval:any){
    this.childStringData.emit(srchval);
  }
}
